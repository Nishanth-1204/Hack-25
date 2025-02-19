import Horizontalscroll from "../../components/HorizontalScroll/HorizontalScroll.tsx";
import Schedule from "../Schedule/Schedule.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import Countdown from "../../components/Countdown/Countdown.tsx";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="vidcontainer">
          <video className="vid1" autoPlay muted loop>
            <source src="./src/assets/vid1.mp4" type="video/mp4" />
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
        {/* <div className="video-container">
          <video
            className="video"
            autoPlay
            muted
            loop
            playsInline
            width="60%" // Make video responsive
          >
            <source src="./src/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
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
                <source src="./src/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mini-tv-glow"></div>
          </div>
        </div>

        <Horizontalscroll />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
