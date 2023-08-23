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
    <footer className="footer">
      <div className="footer__background">
        <img src={circleImg} alt="footer background" />
        <img src={figure1Img} alt="footer background" />
        <img src={figure2Img} alt="footer background" />
      </div>
      <div className="footer__logo">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="footer__social-media-links">
      {mediaIcons.map((img, i) => (
        <a key={i} href="https://google.com" rel="noreferrer" target="_blank">
          <img src={img} alt="icon" />
        </a>
      ))}
      </div>
    </footer>
  );
}

export default Footer;
