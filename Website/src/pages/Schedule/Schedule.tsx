import React, { useState } from "react";
import "./Schedule.css";

const scheduleData: Record<string, { time: string; event: string }[]> = {
  "December 28, 2024": [
    { time: "08:30 AM - 12:30 PM", event: "Registration" },
    { time: "01:30 PM - 03:00 PM", event: "Opening Ceremony" },
    { time: "03:00 PM - 04:00 PM", event: "Platform Registration" },
    { time: "04:00 PM - 06:00 PM", event: "First workshop + Quiz" },
    { time: "08:30 PM - 10:00 PM", event: "Mentoring session 1" },
  ],
  "December 29, 2024": [
    { time: "09:00 AM - 12:00 PM", event: "Second workshop" },
    { time: "01:00 PM - 03:00 PM", event: "Team building activities" },
    { time: "04:00 PM - 06:00 PM", event: "Coding challenge round 1" },
    { time: "08:00 PM - 10:00 PM", event: "Mentoring session 2" },
  ],
  "December 30, 2024": [
    { time: "09:00 AM - 11:00 AM", event: "Final coding round" },
    { time: "12:00 PM - 02:00 PM", event: "Project presentation" },
    { time: "03:00 PM - 05:00 PM", event: "Panel discussion" },
    { time: "06:00 PM - 08:00 PM", event: "Closing Ceremony + Awards" },
  ],
};

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("December 28, 2024");
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
