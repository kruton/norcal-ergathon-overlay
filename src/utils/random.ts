import { useCallback, useEffect, useRef } from "react";

// Utility helper for random number generation
export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

type Callback = () => void;

export const useRandomInterval = (
  callback: Callback,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = useRef<number>(undefined);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";

    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);

        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };

      handleTick();
    }

    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};

export const range = (start: number, end?: number, step: number = 1) => {
  const output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
