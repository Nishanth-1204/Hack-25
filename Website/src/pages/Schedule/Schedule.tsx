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
    { time: "07:00 AM - 08:00 PM", event: "Breakfast" },
    { time: "08:00 AM - 11:00 AM", event: "Team building activities" },
    { time: "11:00 PM - 01:00 PM", event: "Lunch" },
    { time: "01:00 PM - 02:00 PM", event: "Validatictory" },
  ],
};

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("April 24, 2025");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredEvents = scheduleData[selectedDate].filter((item) =>
    item.event.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <input
        type="text"
        className="search-box"
        placeholder="Search event..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="schedule-box animate-fade-in">
        <h2 className="day-title">
          Day {Object.keys(scheduleData).indexOf(selectedDate) + 1}
        </h2>
        <div className="schedule-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item, index) => (
              <div key={index} className="schedule-item animate-glow">
                <span className="time">{item.time}</span>
                <span className="event">{item.event}</span>
              </div>
            ))
          ) : (
            <p className="no-events">No matching events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
