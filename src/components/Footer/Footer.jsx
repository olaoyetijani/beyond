import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__socials">
          <div>
            <BsLinkedin />
            <p>LinkedIn</p>
          </div>

          <div>
            <FiInstagram />
            <p>Instagram</p>
          </div>

          <div>
            <IoLogoTwitter />
            <p>X (Formerly Twitter)</p>
          </div>

          <div>
            <BsLinkedin />
            <p>Gmail</p>
          </div>
        </div>

        <div className="beyond__footer-content">
          <div>
            <h4>Company Address</h4>
            <p>No 123 Victoria Island</p>
            <p>Avenue, Victoria</p>
            <p>Island, Lagos, Nigeria</p>
          </div>

          <div>
            <h4>Services</h4>
            <p>Architectural design</p>
            <p>Construction Documentation</p>
            <p>Project Management</p>
            <p>Site analysis</p>
            <p>Interior Design</p>
          </div>

          <div>
            <h4>Pages</h4>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#about">About us</a>
            </p>
            <p>
              <a href="#services">Our Services</a>
            </p>
            <p>
              <a href="#works">Our works</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
