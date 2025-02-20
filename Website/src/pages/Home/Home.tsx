import Horizontalscroll from "../../components/HorizontalScroll/HorizontalScroll.tsx";
import Schedule from "../Schedule/Schedule.tsx";
import Countdown from "../../components/Countdown/Countdown.tsx";
import PrizeSection from "../../components/PriceSection/PriceSection.tsx";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import FAQSection from "../../components/faq/FAQsection.tsx";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="vidcontainer">
          <video className="vid1" autoPlay muted loop>
            <source src="/vid1.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className="title">HackXelerate'25</h1>
        <div className="count">
          <Countdown />
          <button onClick={() => navigate("/register")} className="registerbtn">
            Register
          </button>
        </div>
        <Schedule />
        <PrizeSection />
        <div className="mini-tv-container">
          <div className="mini-tv-frame">
            <div className="mini-tv-screen">
              <video
                className="mini-tv-video"
                autoPlay
                muted
                loop
                playsInline
                width={"100%"}
              >
                <source src={"/video.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mini-tv-glow"></div>
          </div>
        </div>

        <Horizontalscroll />
        <FAQSection />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
