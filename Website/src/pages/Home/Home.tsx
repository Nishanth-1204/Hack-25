import Horizontalscroll from "../../components/HorizontalScroll/HorizontalScroll.tsx";
import Schedule from "../Schedule/Schedule.tsx";
import Countdown from "../../components/Countdown/Countdown.tsx";
import PrizeSection from "../../components/PriceSection/PriceSection.tsx";
import "./Home.css";

import FAQSection from "../../components/faq/FAQsection.tsx";
import SponsorSection from "../../components/SponsorSection/SponsorSection.tsx";

const Home = () => {
  return (
    <>
      <div className="container">
        <section id="home" className="vidcontainer">
          <video autoPlay muted loop className="vid1" width="640" playsInline>
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="title">HackXelerate'25</h1>
        </section>
        <section id="countdown" className="count">
          <Countdown />
          <div>
            <a
              href="/assets/Rulebook.pdf"
              download="Rulebook.pdf"
              className="Download-btn"
            >
              <h4 className="rule">RuleBook Download</h4>
            </a>
            <a
              href="/assets/template.docx"
              download="template.docx"
              className="Download-btn1"
            >
              <h4>PDF template Download</h4>
            </a>
          </div>
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="prizes">
          <PrizeSection />
        </section>

        <section id="gallery" className="mini-tv-section">
          <h1 className="gallery-title">Past Year Gallery</h1>
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
            <Horizontalscroll />
          </div>
        </section>
        <section>
          <h1 className="sponsor-title">Our Honoured Sponsors</h1>
          <SponsorSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
