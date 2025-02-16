import "./DonationQR.css";
import qrCode from "@/assets/norcal-qr.png"; // Import your QR code image

export const DonationQR = () => {
  return (
    <div className="donate-container">
      <img src={qrCode} alt="Norcal QR Code" className="qr-code" />
      <span className="donate-text">Donate now!</span>
    </div>
  );
};
