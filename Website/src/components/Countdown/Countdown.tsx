import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Countdown.css";

const Countdown: React.FC = () => {
  const navigate = useNavigate();
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-24T23:59:59").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [flip, setFlip] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = calculateTimeLeft();
        setFlip({
          days: prevTime.days !== newTime.days,
          hours: prevTime.hours !== newTime.hours,
          minutes: prevTime.minutes !== newTime.minutes,
          seconds: prevTime.seconds !== newTime.seconds,
        });
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flip-timer">
        <h2 className="timer-title">Event Starts In</h2>
        <div className="timer-container">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <div key={index} className="timer-box">
              <div
                className={`flip-card ${
                  flip[label as keyof typeof flip] ? "flip" : ""
                }`}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">{value}</div>
                  <div className="flip-card-back">{value}</div>
                </div>
              </div>
              <p className="timer-label">{label.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>
      <button onClick={() => navigate("/register")} className="registerbtn">
        Register
      </button>
    </>
  );
};

export default Countdown;
