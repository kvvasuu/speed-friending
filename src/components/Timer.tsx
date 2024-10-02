import { useState, useEffect } from "react";

interface Props {
  value: number;
  handleTimerEnd?: () => void;
}

const CountdownTimer = ({ value, handleTimerEnd }: Props) => {
  const [timeLeft, setTimeLeft] = useState<number>(value);

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
      {timeLeft > 0 ? <h1>{timeLeft} sekund</h1> : <h1>Czas minął!</h1>}
    </div>
  );
};

export default CountdownTimer;
