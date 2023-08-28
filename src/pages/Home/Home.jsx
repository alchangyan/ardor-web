import { format } from "date-fns";

import CountdownTimer from "../../components/CountdownTimer";
import CTAButton from "../../components/CTAButton";
import Card from "../../components/Card";

import goldImg from "../../assets/images/gold.png";
import houseImg from "../../assets/images/house.png";
import phoneImg from "../../assets/images/phone.png";
import winner1Img from "../../assets/images/temp/winner 1.png";
import winner2Img from "../../assets/images/temp/winner 2.png";
import winner3Img from "../../assets/images/temp/winner 3.png";

import "./Home.scss";

const cardText =
  "Lorem ipsum dolor sit amet consectetur. Duis sit eget malesuada viverra massa ut. Dapibus scelerisque id molestie quis enim dui";

function Home() {
  const nextDraw = 1692708117759;

  return (
    <main className="home">
      <h1>
        Get a <b>unique chance</b> of <b>winning a luxury villa</b>
        <br />
        by booking a consultancy.
      </h1>
      <div className="home__book-button">
        <CTAButton text="Book Now" />
      </div>
      <section className="home__next-draw">
        <div>Next Draw:</div>
        <div>{format(new Date(nextDraw), "eeee, d LLLL, yyyy")}</div>
      </section>
      <div className="home__timer">
        <CountdownTimer />
      </div>
      <section>
        <h2>
          <b>Book consultancy</b> with our
          <br />
          realtors and <b>Get a chance to win</b>
        </h2>
        <div className="home__cards">
          <Card image={houseImg} title="House">
            <div className="home__card-content">{cardText}</div>
          </Card>
        </div>
        <div className="home__cards">
          <Card image={phoneImg} title="Phones">
            <div className="home__card-content">{cardText}</div>
          </Card>
          <Card image={goldImg} title="Money">
            <div className="home__card-content">{cardText}</div>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default Home;
