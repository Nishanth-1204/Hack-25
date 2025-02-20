import React from "react";
import "./PriceSection.css";
import img1 from "../../assets/images/1st_prize.png";
import img2 from "../../assets/images/2nd_final.png";
import img3 from "../../assets/images/3rd_prize_final.png";
import img4 from "../../assets/images/prize.png";
interface Prize {
  name: string;
  image: string;
}

const prizes: Prize[] = [
  { name: "1st Prize", image: img1 },
  { name: "2nd Prize", image: img2 },
  { name: "3rd Prize", image: img3 },
  {
    name: "MissXelerate",

    image: img4,
  },
  { name: "MrXelerate", image: img4 },
  { name: "Zenith", image: img4 },
  { name: "Xelerates-(10)", image: img4 },
];

const PrizeSection: React.FC = () => {
  return (
    <section id="prizes" className="prize-section">
      <div className="prize-header">
        <h1 className="prize-title">Prizes</h1>
        <h2>Total Prize Pool - 75,000</h2>
      </div>
      <div className="prize-container">
        {prizes.map((prize, index) => (
          <div key={index} className="prize-card">
            <div className="prize-imgBx">
              <img src={prize.image} alt={prize.name} />
            </div>
            <div className="prize-content">
              <h3 className="prize-name">{prize.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizeSection;
