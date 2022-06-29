import React from "react";
import "../styles/Footer.css";
import Logo from "../images/Adventor.png";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main-footer">
        <div>
          <img src={Logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Tincidunt
            id sem vel quis in turpis sit eget pellentesque.<br/> Nunc etiicies in
            rhoncus, rhoncus in arcu. 
          </p>
        </div>
        <div>
          <h2>Quick Menu</h2>
          <p>Home</p>
          <p>About</p>
          <p>Stories</p>
          <p>Trending Stories</p>
          <p>Popular Stories</p>
        </div>
        <div>
          <h2>Sign Up For Our Newsletter</h2>
          <form>
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="underline"></div>
      <div className="socials">
        <h5>Terms and Policy</h5>
        <div>
          <TiSocialFacebook />
          <TiSocialLinkedin />
          <TiSocialTwitter />

        </div>

      </div>
    </div>
  );
};

export default Footer;
