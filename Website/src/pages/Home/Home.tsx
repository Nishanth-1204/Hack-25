import Horizontalscroll from "../../components/HorizontalScroll/HorizontalScroll.tsx";
import Schedule from "../Schedule/Schedule.tsx";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <h2 className="hh">HackXelerate'25</h2>
        <video className="vid1" autoPlay muted loop>
          <source src="./src/assets/vid1.mp4" type="video/mp4" />
        </video>
        <Schedule />
        <div className="video-container">
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
        </div>
        <Horizontalscroll />
      </div>
      <div className="footercontainer">
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default Home;
