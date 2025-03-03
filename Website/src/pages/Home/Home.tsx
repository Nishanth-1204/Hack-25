import { useEffect } from "react";
import Horizontalscroll from "../../components/HorizontalScroll/HorizontalScroll.tsx";
import Schedule from "../Schedule/Schedule.tsx";
import Countdown from "../../components/Countdown/Countdown.tsx";
import PrizeSection from "../../components/PriceSection/PriceSection.tsx";
import "./Home.css";

import FAQSection from "../../components/faq/FAQsection.tsx";
import SponsorSection from "../../components/SponsorSection/SponsorSection.tsx";

const Home = () => {
  useEffect(() => {
    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <>
      <div className="container">
        <section id="home" className="vidcontainer">
          <video autoPlay muted loop className="vid1" width="640" playsInline>
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="title">HackXelerate'25</h1>
          <h1 className="subtitle">A National Level Technical Hackathon</h1>
        </section>
        <section id="countdown" className="count">
          <Countdown />
          <div className="home-div-container">
            <a
              href="https://drive.google.com/file/d/1dEt6iWR3kM6Y9YUL9PtumbLlVslGIR1R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="Download-btn"
            >
              <h4 className="rule">RuleBook</h4>
            </a>
            <a
              href="https://drive.google.com/file/d/1BGFXS7tt9ExXaioZMF4Rb8c_NRS1I552/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="Download-btn1"
            >
              <h4 className="template">Broucher</h4>
            </a>
            <a
              href="https://docs.google.com/document/d/17FNI2grg_SDJ7401zCDw5kF6Ef3_wrf3/edit?usp=sharing&ouid=113957660542972190779&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="Download-btn2"
            >
              <h4 className="abstract-Form">Abstract Submission Form</h4>
            </a>
          </div>
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="prizes">
          <PrizeSection />
        </section>
        {/* Current Gallery Section */}
        <section id="current-gallery" className="mini-tv-section">
          <h1 className="gallery-title">Current Gallery</h1>
          <div className="video-wrapper">
            <div className="glowing-box">
              <iframe
                className="responsive-video"
                src="https://www.youtube.com/embed/0eHbbyfVRk4?si=UQRTcH9KGx8ROsgT&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>
        <section id="gallery" className="mini-tv-section">
          <h1 className="gallery-title">Past Gallery</h1>
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
    </>
  );
};

export default Home;