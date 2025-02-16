import "./Donor.css";
import { Donation } from "@/utils/fetch-donations";

interface DonorProps {
  name: string;
  amount: string;
  className?: string;
}

export const Donor = ({ name, amount, className }: DonorProps) => {
  return (
    <div className={`donor-wrapper ${className || ""}`}>
      <span className="donor-name">{name}</span>
      <span className="donor-amount">Donated ${amount}</span>
    </div>
  );
};
