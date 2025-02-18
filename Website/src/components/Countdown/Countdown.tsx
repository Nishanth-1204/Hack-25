import { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const endDate = "04/24/2025 00:08:00";
  const [time, setTime] = useState({
    day: "",
    hour: "",
    minute: "",
    second: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endDate).getTime() - now;

      const days = `${Math.floor(distance / (1000 * 60 * 60 * 24))}`;
      const hours = `${Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )}`;
      const minutes = `${Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      )}`;
      const seconds = `${Math.floor((distance % (1000 * 60)) / 1000)}`;

      setTime({
        day: days.length === 1 ? `0${days}` : `${days}`,
        hour: hours.length === 1 ? `0${hours}` : `${hours}`,
        minute: minutes.length === 1 ? `0${minutes}` : `${minutes}`,
        second: seconds.length === 1 ? `0${seconds}` : `${seconds}`,
      });
    });

    return () => clearInterval(interval);
  });

  return (
    <div className="countdown">
      <h1>
        {time.day} : {time.hour} : {time.minute} : {time.second}
      </h1>
    </div>
  );
};

export default Countdown;
