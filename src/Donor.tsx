import "./Donor.css";
import { Donation } from "./FetchDonations";

interface DonorProps {
  donation: Donation;
  className?: string;
}

const getDisplayName = (donation: Donation) => {
  return donation.isAnonymous
    ? "Anonymous"
    : `${donation.firstName} ${donation.lastName}`;
};

const getDisplayAmount = (donation: Donation) => {
  return (donation.transferrableAmount / 100).toFixed(2);
};

const Donor = ({ donation, className }: DonorProps) => {
  return (
    <div className={`donor-wrapper ${className || ""}`}>
      <span className="donor-name">{getDisplayName(donation)}</span>
      <span className="donor-amount">
        Donated ${getDisplayAmount(donation)}
      </span>
    </div>
  );
};

export default Donor;
