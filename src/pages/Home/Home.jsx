import { format } from "date-fns";
import { Link } from "react-router-dom";

import CountdownTimer from "../../components/CountdownTimer";
import CTAButton from "../../components/CTAButton";
import Card from "../../components/Card";
import Accordion from "../../components/Accordion";
import Modal from "../../components/Modal";
import MoreDetailsModalContent from "../../components/MoreDetailsModalContent";

import goldImg from "../../assets/images/gold.png";
import houseImg from "../../assets/images/house.png";
import phoneImg from "../../assets/images/phone.png";
import winner1Img from "../../assets/images/temp/winner 1.png";
import winner2Img from "../../assets/images/temp/winner 2.png";
import winner3Img from "../../assets/images/temp/winner 3.png";
import moreDetailsEn from "../../assets/images/more-details-en.jpg";

import "./Home.scss";
import { useCallback, useState } from "react";

const cardText =
  "Lorem ipsum dolor sit amet consectetur. Duis sit eget malesuada viverra massa ut. Dapibus scelerisque id molestie quis enim dui";

const winnerCardContent = (
  <div className="home__winner-content">
    <div>
      <span>Where:</span>
      <span>Abu Dhabi</span>
    </div>
    <div>
      <span>When:</span>
      <span>March 07/2023</span>
    </div>
    <div>
      <span>What:</span>
      <span>$150.000.000</span>
    </div>
  </div>
);

const ioFn = (prevState) => !prevState;

function Home() {
  const [isMoreDetailsModalOpen, setIsMoreDetailsModalOpen] = useState(false);
  const [isWinnersModalOpen, setIsWinnersModalOpen] = useState(false);

  const toggleOpenModal = useCallback((e) => {
    const { modalId } = e.currentTarget.dataset;

    switch (modalId) {
      case "winners":
        setIsWinnersModalOpen(ioFn);
        break;
      case "more-details":
        setIsMoreDetailsModalOpen(ioFn);
        break;

      default:
        setIsMoreDetailsModalOpen(false);
        setIsWinnersModalOpen(false);
        break;
    }
  }, []);

  const nextDraw = 1692708117759;

  return (
    <main className="home">
      <Modal open={isMoreDetailsModalOpen} onClose={toggleOpenModal}>
        <MoreDetailsModalContent />
      </Modal>
      <Modal open={isWinnersModalOpen} onClose={toggleOpenModal}>
        <div className="home__winners-modal-content scrollbar">
          <h1>
            Our
            <br />
            <b>Winners</b>
          </h1>
          <div className="home__winners-modal-list">
            {Array(10)
              .fill(true)
              .map((_, i) => (
                <Card
                  key={i}
                  image={winner1Img}
                  type="winner"
                  title="Anna Williams"
                >
                  <div className="home__card-content winner">
                    {winnerCardContent}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </Modal>
      <img
        className="home__more-details-button"
        src={moreDetailsEn}
        alt="more details button"
        data-modal-id="more-details"
        onClick={toggleOpenModal}
      />
      <h1>
        Get a <b>unique chance</b> of <b>winning a luxury villa</b>
        <br />
        by booking a consultancy.
      </h1>
      <div className="home__book-button">
        <Link to="buy-a-ticket">
          <CTAButton text="Book Now" />
        </Link>
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
        <div className="home__buy-ticket-button">
          <Link to="buy-a-ticket">
            <CTAButton text="Buy a Ticket" />
          </Link>
        </div>
        <h2>
          Frequently Asked <br />
          <b>Questions</b>
        </h2>
        <div className="home__accordion">
          <Accordion />
        </div>
        <h2>
          Our <br />
          <b>Winners</b>
        </h2>
        <div className="home__cards winners">
          <Card image={winner1Img} type="winner" title="Anna Williams">
            <div className="home__card-content winner">{winnerCardContent}</div>
          </Card>
          <Card image={winner2Img} type="winner" title="Anna Williams">
            <div className="home__card-content winner">{winnerCardContent}</div>
          </Card>
          <Card image={winner3Img} type="winner" title="Anna Williams">
            <div className="home__card-content winner">{winnerCardContent}</div>
          </Card>
        </div>
        <div className="home__modal-button-wrapper">
          <div
            className="home__winners-button"
            data-modal-id="winners"
            onClick={toggleOpenModal}
          >
            More Winners
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
