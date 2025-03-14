import React, { useState } from "react";
import "./Schedule.css";

const scheduleData: Record<string, { time: string; event: string }[]> = {
  "April 24, 2025": [
    { time: "08:00 AM - 09:30 AM", event: "Registration" },
    { time: "09:30 AM - 10:00 AM", event: "Inauguration" },
    { time: "12:00 PM - 01:00 PM", event: "Lunch" },
    { time: "01:00 PM - 04:00 PM", event: "Round One Evaluation" },
    { time: "08:00 PM - 09:00 PM", event: "Dinner" },
    { time: "09:00 PM - 12:00 PM", event: "Round Two" },
  ],
  "April 25, 2025": [
    { time: "07:00 AM - 08:00 AM", event: "Breakfast" },
    { time: "08:00 AM - 11:00 AM", event: "Team Building Activities" },
    { time: "11:00 AM - 01:00 PM", event: "Lunch" },
    { time: "01:00 PM - 02:00 PM", event: "Valedictory" },
  ],
};

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("April 24, 2025");

  return (
    <div className="schedule-container">
      <h1 className="schedule-title">SCHEDULE</h1>

      <div className="date-buttons">
        {Object.keys(scheduleData).map((date) => (
          <button
            key={date}
            className={`date-button ${selectedDate === date ? "active" : ""}`}
            onClick={() => setSelectedDate(date)}
          >
            {date}
          </button>
        ))}
      </div>

      <div className="schedule-box">
        <h2 className="day-title">
          Day {Object.keys(scheduleData).indexOf(selectedDate) + 1}
        </h2>
        <div className="schedule-list">
          {scheduleData[selectedDate]?.map((item, index) => (
            <div key={index} className="schedule-item">
              <span className="time">{item.time}</span>
              <span className="event">{item.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
