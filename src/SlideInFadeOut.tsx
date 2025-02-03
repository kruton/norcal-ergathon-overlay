import { useState, useEffect } from "react";
import "./SlideInFadeOut.css"; // Import the CSS file to handle animations

interface SlideInFadeOutProps {
  children: React.ReactNode;
  onAnimationComplete: () => void;
}

const SlideInFadeOut = ({
  children,
  onAnimationComplete,
}: SlideInFadeOutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start the visibility animation after a short delay
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Short initial delay to ensure the component is mounted

    // Schedule the exit animation after 3 seconds
    const timeout = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup the timeout on unmount
  }, []);

  useEffect(() => {
    if (isExiting) {
      // Call the callback function when the exit animation is complete
      const timer = setTimeout(onAnimationComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [isExiting, onAnimationComplete]);

  return (
    <div
      className={`slide-in-fade-out ${isVisible ? "visible" : ""} ${
        isExiting ? "exit" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default SlideInFadeOut;
