import "./AllDonors.css";
import { DonationQR } from "@/components/DonationQR/DonationQR";
import { ShowNames } from "@/components/ShowNames/ShowNames";
import { useEffect, useState } from "react";
import { Donation, fetchDonations } from "@/utils/fetch-donations";

export const AllDonors = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [atEndOfList, setAtEndOfList] = useState<boolean>(false);

  useEffect(() => {
    (async (cursor: number) => {
      if (loading || !atEndOfList) return;
      console.log("Fetching more donations...");
      setLoading(true);
      try {
        const data = await fetchDonations(cursor);
        if (data.donations.length === 0) {
          // If no more donations are returned, stop fetching
          return;
        }
        setDonations((prevDonations) => [...prevDonations, ...data.donations]);
        setCursor(data.cursor);
        setAtEndOfList(false);
      } catch (error) {
        console.error("Error fetching donations:", error);
      } finally {
        setLoading(false);
      }
    })(cursor);
  }, [atEndOfList]);

  const handleEndOfList = () => {
    setAtEndOfList(true);
  };

  return (
    <>
      <div className="donors-list">
        <ShowNames
          donations={donations}
          startIndex={cursor}
          onEndReached={handleEndOfList}
        />
      </div>
      <DonationQR />
    </>
  );
};
