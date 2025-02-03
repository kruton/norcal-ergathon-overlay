import "./NewDonors.css";
import SlideInFadeOut from "./SlideInFadeOut";
import { useEffect, useState } from "react";
import { fetchDonations, Donation } from "./FetchDonations";
import Donor from "./Donor";

const NewDonors = () => {
  const [lastSeen, setLastSeen] = useState<Date | null>(null);
  const [queue, setQueue] = useState<Donation[]>([]);
  const [currentDonation, setCurrentDonation] = useState<Donation | null>(null);

  useEffect(() => {
    const fetchAndProcessDonations = async () => {
      try {
        const donations = await fetchDonations(0);
        if (donations.donations.length > 0) {
          if (!lastSeen) {
            setLastSeen(new Date(donations.donations[0].createdAtUtc));
          } else {
            const newEntries = donations.donations.filter(
              (donation) => new Date(donation.createdAtUtc) > lastSeen
            );
            if (newEntries.length > 0) {
              setQueue((prevQueue) => [...prevQueue, ...newEntries]);
              setLastSeen(new Date(newEntries[0].createdAtUtc));
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch donations:", error);
      }
    };

    fetchAndProcessDonations();

    const intervalId = setInterval(fetchAndProcessDonations, 10000);

    return () => clearInterval(intervalId);
  }, [lastSeen]);

  useEffect(() => {
    if (queue.length > 0 && !currentDonation) {
      setCurrentDonation(queue[0]);
      setQueue((prevQueue) => prevQueue.slice(1));
    }
  }, [queue, currentDonation]);

  const onAnimationComplete = () => {
    setCurrentDonation(null);
  };

  return (
    <div className="new-donors-container">
      {currentDonation && (
        <SlideInFadeOut onAnimationComplete={onAnimationComplete}>
          <Donor donation={currentDonation} />
        </SlideInFadeOut>
      )}
    </div>
  );
};

export default NewDonors;
