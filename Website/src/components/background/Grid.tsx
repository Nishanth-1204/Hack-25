import React from "react";
import "./grid.css";

const GridBackground: React.FC = () => {
  return (
    <div className="grid-background-container">
      <div className="grid-background"></div>
      <div className="grid-overlay"></div>
    </div>
  );
};

export default GridBackground;
