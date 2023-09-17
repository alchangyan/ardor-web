import { memo } from "react";

// Images
import left1Img from "../../assets/images/background-set/left-1.svg";
import left2Img from "../../assets/images/background-set/left-2.svg";
import left3Img from "../../assets/images/background-set/left-3.svg";
import leftLineBlackImg from "../../assets/images/background-set/left-line-black.svg";
import leftLineWhiteImg from "../../assets/images/background-set/left-line-white.svg";
import right1Img from "../../assets/images/background-set/right-1.svg";
import right2Img from "../../assets/images/background-set/right-2.svg";
import rightLineWhiteImg from "../../assets/images/background-set/right-line-white.svg";
import houseImg from "../../assets/images/background-set/house.png";
import ticketsImg from "../../assets/images/background-set/tickets.png";
import lotteryImg from "../../assets/images/background-set/lottery.png";

// Styles
import "./Background.scss";

function Background({secondary}) {
  return (
    <div className="background">
      {!secondary && <img className="background__left3" src={left3Img} alt="background" />}
      <img className="background__left2" src={left2Img} alt="background" />
      <img className="background__left1" src={left1Img} alt="background" />
      {!secondary && <img className="background__leftLineBlack" src={leftLineBlackImg} alt="background" />}
      <img className="background__leftLineWhite" src={leftLineWhiteImg} alt="background" />
      {!secondary && <img className="background__house" src={houseImg} alt="background" />}
      {!secondary && <img className="background__right2" src={right2Img} alt="background" />}
      {!secondary && <img className="background__right1" src={right1Img} alt="background" />}
      {!secondary && <img className="background__rightLineWhite" src={rightLineWhiteImg} alt="background" />}
      {!secondary && <img className="background__lottery" src={lotteryImg} alt="background" />}
      {!secondary && <img className="background__tickets" src={ticketsImg} alt="background" />}
    </div>
  );
}

export default memo(Background);
