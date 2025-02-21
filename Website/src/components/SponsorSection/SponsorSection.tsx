import React, { useEffect, useRef } from "react";
import "./SponsorSection.css";

const sponsors = [
  { name: "Retro Teenz", logo: "/RETRO.jpg" },
  { name: "Navigate Labs", logo: "/navigate_labs_ai.jpg" },
  { name: "XYZ", logo: "/xyz.png" },
  { name: "Reccsar Pvt Ltd.", logo: "/Reccsar.jpg" },
  { name: "S2S", logo: "/S2S.jpg" },
];

const SponsorSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate items for infinite scrolling
    const originalItems = Array.from(track.children);
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    // Scroll animation
    let animationFrameId: number;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (track) {
        track.scrollLeft += scrollSpeed;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0; // Reset seamlessly
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="sponsor-section">
      <div className="sponsor-track-wrapper">
        <div className="sponsor-track" ref={trackRef}>
          {sponsors.map((sponsor, index) => (
            <div className="sponsor-item" key={index}>
              <img src={sponsor.logo} alt={sponsor.name} />
              <p>{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
