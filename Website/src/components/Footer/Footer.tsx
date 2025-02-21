import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <strong>Avinashi- Coimbatore Road, Arasur, Tamil Nadu</strong>
            </p>
            <p>
              <i className="fas fa-phone"></i> 0422 263 5600
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:info@kpriet.ac.in">info@kpriet.ac.in</a>
            </p>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <h3>About the Institute</h3>
            <p>
              To become a premier institute of academic excellence by imparting
              technical, intellectual, and professional skills to students.
            </p>
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
        </div>
      </footer>
    </div>
  );
};
