import React from "react";
import "./schedule.css";

const Schedule = () => {
  return (
    <>
      <div className="schedule">
        <div className="r1">
          <h2 className="rightside">Round:1</h2>
          <p className="leftside">Project selection</p>
        </div>
        <div className="r2">
          <h2 className="rightside">Round:2</h2>
          <p className="leftside">Offline Hackthon</p>
        </div>
        <div className="r3">
          <h2 className="rightside">Round:3</h2>
          <p className="leftside">Finals</p>
        </div>
      </div>
    </>
  );
};

export default Schedule;
