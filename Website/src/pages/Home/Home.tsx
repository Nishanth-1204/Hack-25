import Horizontalscroll from "../../components/HorizontalScroll/HorizontalScroll.tsx";
import Schedule from "../Schedule/Schedule.tsx";
import Countdown from "../../components/Countdown/Countdown.tsx";
import PrizeSection from "../../components/PriceSection/PriceSection.tsx";
import "./Home.css";

import FAQSection from "../../components/faq/FAQsection.tsx";

const Home = () => {
  return (
    <>
      <div className="container">
        <section id="home" className="vidcontainer">
          <video className="vid1" autoPlay muted loop>
            <source src="/vid1.mp4" type="video/mp4" />
          </video>
          <h1 className="title">HackXelerate'25</h1>
        </section>
        <section id="countdown" className="count">
          <Countdown />
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="prizes">
          <PrizeSection />
        </section>
        <section id="gallery" className="mini-tv-container">
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
        </section>
        <Horizontalscroll />
        {/* <section>
          <h1 className="sponsor-title">Our Honored Sponsors</h1>
          <SponsorSection />
        </section> */}
        <section id="faq">
          <FAQSection />
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
