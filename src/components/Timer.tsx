import { useState, useEffect } from "react";

interface Props {
  initialValue: number;
  handleTimerEnd: () => void;
  isPlaying: boolean;
}

const Timer = ({ initialValue, handleTimerEnd, isPlaying }: Props) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialValue);

  useEffect(() => {
    if (isPlaying) {
      setTimeLeft(initialValue);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else if (handleTimerEnd) {
      handleTimerEnd();
    }
  }, [timeLeft]);

  return (
    <div>
      {timeLeft > 0 ? (
        <h1 className="text-3xl font-bold text-orange-500 drop-shadow-sm m-4 select-none">
          {timeLeft} sekund
        </h1>
      ) : (
        <h1 className="text-3xl font-bold text-orange-500 drop-shadow-sm m-4 select-none animate-pulse">
          Czas minął!
        </h1>
      )}
    </div>
  );
};

export default Timer;
