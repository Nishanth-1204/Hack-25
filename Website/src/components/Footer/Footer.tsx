import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            <h2 className="footer-title">About the Institute</h2>
            <h3 className="footer-description">
              To become a premier institute of academic excellence by imparting
              technical knowledge, intellectual growth, and professional skills.
            </h3>
            <div className="social-icons">
              <a target="_blank" href="https://www.kpriet.ac.in/">
                <img src="/website.png" width="30" height="30" />
              </a>
              <a target="_blank" href="https://www.facebook.com/KPRIETonline/">
                <img src="/facebook.png" width="30" height="30" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/kprietonline/?hl=en"
              >
                <img src="/instagram.png" width="30" height="30" />
              </a>
              <a target="_blank" href="https://x.com/KPRIETonline/">
                <img src="/twitter.png" width="30" height="30" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <h2>Contact the Organisers</h2>
            <div className="contact-info">
              <div className="contacts">
                <h3>DharaniPriya M</h3>
                <span>
                  <a href="mailto:22cb013@kpriet.ac.in">22cb013@kpriet.ac.in</a>
                </span>
                <p>+91 9360640951</p>
              </div>
              <div className="contacts">
                <h3>Priyadharshini I</h3>
                <span>
                  <a href="mailto:23cb034@kpriet.ac.in">22cb013@kpriet.ac.in</a>
                </span>
                <p>+91 9677901869</p>
              </div>
              <div className="contacts">
                <h3>Team HackXelerate</h3>
                <span>
                  <a href="mailto:hackxelerate@gmail.com">
                    hackxelerate@gmail.com
                  </a>
                </span>
                <p>+91 6382148621</p>
              </div>
              <div className="contacts">
                <h3>Dhanyaa R S</h3>
                <span>
                  <a href="mailto:23cb007@kpriet.ac.in">23cb007@kpriet.ac.in</a>
                </span>
                <p>+91 8300451102</p>
              </div>
              <div className="contacts">
                <h3>Sarvesh S</h3>
                <span>
                  <a href="mailto:23cb053@kpriet.ac.in">23cb053@kpriet.ac.in</a>
                </span>
                <p>+91 7092913333</p>
              </div>
              <div className="contacts">
                <h3>Rethan Kumar C V</h3>
                <span>
                  <a href="mailto:23cb040@kpriet.ac.in">23cb040@kpriet.ac.in</a>
                </span>
                <p>+91 8778635036</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
