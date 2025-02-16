import { useState, useEffect } from "react";
import "./ShowNames.css";
import { Donor } from "@/components/Donor/Donor";
import {
  Donation,
  getDonationAmount,
  getDonorName,
} from "../../utils/fetch-donations";

interface ShowNamesProps {
  donations: Donation[];
  startIndex: number;
  onEndReached: () => void;
}

export const ShowNames = ({
  donations,
  startIndex,
  onEndReached,
}: ShowNamesProps) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (donations) {
      const interval = setInterval(() => {
        setIsTransitioning(true); // Start transition
        setTimeout(() => {
          setCurrentIndex((prevIndex) => {
            if (donations.length === 0) {
              return prevIndex;
            } else {
              return (prevIndex + 1) % donations.length;
            }
          });
          setIsTransitioning(false); // End transition after delay
          if (currentIndex >= donations.length - 5) {
            onEndReached();
          }
        }, 500); // Match this with the CSS transition duration
      }, 3000); // Change name every 3 seconds

      return () => clearInterval(interval);
    }
  }, [donations, currentIndex, onEndReached]);

  if (!donations || !donations.length) {
    return <></>;
  }

  const currentDonation = donations[currentIndex];

  const nextIndex = (currentIndex + 1) % donations.length;
  const nextDonation = donations[nextIndex];

  return (
    <div className="donor-container" key={currentIndex}>
      <Donor
        name={getDonorName(currentDonation)}
        amount={getDonationAmount(currentDonation)}
        className={`current-donor ${isTransitioning ? "transition-out" : ""}`}
      />
      <Donor
        name={getDonorName(nextDonation)}
        amount={getDonationAmount(nextDonation)}
        className={`next-donor ${isTransitioning ? "transition-in" : ""}`}
      />
    </div>
  );
};
