import logoImg from "../../assets/images/logo.svg";
import circleImg from "../../assets/images/footer-set/circle.svg";
import figure1Img from "../../assets/images/footer-set/figure-1.svg";
import figure2Img from "../../assets/images/footer-set/figure-2.svg";
import fbImg from "../../assets/images/footer-set/fb.png";
import instagramImg from "../../assets/images/footer-set/instagram.png";
import snapchatImg from "../../assets/images/footer-set/snapchat.png";
import tiktokImg from "../../assets/images/footer-set/tiktok.png";
import youtubeImg from "../../assets/images/footer-set/youtube.png";

import "./Footer.scss";

const mediaIcons = [
  fbImg,
  instagramImg,
  snapchatImg,
  tiktokImg,
  youtubeImg,
];

function Footer() {
  return (
    <>
      <footer className="footer-top">
        <div className="footer-top__background">
          <img src={circleImg} alt="footer background" />
          <img src={figure1Img} alt="footer background" />
          <img src={figure2Img} alt="footer background" />
        </div>
        <div className="footer-top__logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="footer-top__social-media-links">
        {mediaIcons.map((img, i) => (
          <a key={i} href="https://google.com" rel="noreferrer" target="_blank">
            <img src={img} alt="icon" />
          </a>
        ))}
        </div>
      </footer>
      <footer className="footer-bottom">
        <div className="footer-bottom__wrapper">
          <div>© ARDOR PROPERTIES 2023. All rights reserved</div>
          <div>
            <div className="footer-bottom__modal-button">Privacy Policy</div>
            <div className="footer-bottom__modal-button">Terms and Conditions</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
