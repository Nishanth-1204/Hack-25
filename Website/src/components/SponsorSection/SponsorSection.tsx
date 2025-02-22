import "./SponsorSection.css";

const SponsorSection = () => {
  const sponsors = [
    "/RETRO.jpg",
    "/navigate_labs_ai.jpg",
    "/Reccsar.jpg",
    "/S2S.jpg",
    "/xyz.png",
  ];

  return (
    <div className="sponsor-section">
      <div className="sponsor-track">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor}
            alt={`Sponsor ${index + 1}`}
            className="sponsor-logo"
          />
        ))}
        {/* Duplicate the entire track for seamless looping */}
        {sponsors.map((sponsor, index) => (
          <img
            key={`duplicate-${index}`}
            src={sponsor}
            alt={`Sponsor duplicate ${index + 1}`}
            className="sponsor-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorSection;
