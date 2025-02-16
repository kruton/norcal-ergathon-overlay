import "./Donor.css";
import Sparkles from "@/components/Sparkles/Sparkles";

interface DonorProps {
  name: string;
  amount: string;
  className?: string;
}

export const Donor = ({ name, amount, className }: DonorProps) => {
  return (
    <div className={`donor-wrapper ${className || ""}`}>
      <Sparkles>
        <span className="donor-name">{name}</span>
      </Sparkles>
      <span className="donor-amount">Donated ${amount}</span>
    </div>
  );
};
