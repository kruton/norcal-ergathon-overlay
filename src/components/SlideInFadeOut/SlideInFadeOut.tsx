import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

interface SlideInFadeOutProps {
  children: React.ReactNode;
  onAnimationComplete: () => void;
  horizontal?: boolean;
  displayMs?: number;
  restart?: boolean;
}

export const SlideInFadeOut = ({
  children,
  onAnimationComplete,
  horizontal = false,
  displayMs = 3000,
  restart = false,
}: SlideInFadeOutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Start the visibility animation after a short delay
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Short initial delay to ensure the component is mounted

    // Schedule the exit animation after 3 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setIsExiting(true);
    }, displayMs);

    return () => clearTimeout(timeout); // Cleanup the timeout on unmount
  }, [displayMs, animationKey]);

  useEffect(() => {
    const animationCompleted = () => {
      setIsVisible(false);
      setIsExiting(false);

      if (restart) {
        setAnimationKey(animationKey + 1); // Restart the animation by incrementing the key
      }
      onAnimationComplete();
    };

    if (isExiting) {
      // Call the callback function when the exit animation is complete
      const timer = setTimeout(animationCompleted, 1000);
      return () => clearTimeout(timer);
    }
  }, [animationKey, isExiting, onAnimationComplete, restart]);

  return (
    <Wrapper $isVisible={isVisible} $horizontal={horizontal}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $horizontal?: boolean; $isVisible?: boolean }>`
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  ${(props) =>
    (props.$isVisible &&
      css`
        opacity: 0;
        ${(props.$horizontal &&
          css`
            transform: translateX(100%);
          `) ||
        css`
          transform: translateY(100%);
        `}
      `) ||
    css`
      opacity: 1;
      ${(props.$horizontal &&
        css`
          transform: translateX(0%);
        `) ||
      css`
        transform: translateY(0%);
      `}
    `}
`;
