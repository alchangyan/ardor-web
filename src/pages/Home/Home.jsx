import CountdownTimer from "../../components/CountdownTimer";
import CTAButton from "../../components/CTAButton";
import { format } from 'date-fns'

import "./Home.scss";

function Home() {
  const nextDraw = 1692708117759;

  return (
    <main className="home">
      <h1>
        Get a <b>unique chance</b> of <b>winning a luxury villa</b><br />by booking a consultancy.
      </h1>
      <div className="home__buy-button">
        <CTAButton text="Book Now"/>
      </div>
      <section className="home__next-draw">
        <div>Next Draw:</div>
        <div>{format(new Date(nextDraw), "eeee, d LLLL, yyyy")}</div>
      </section>
      <div className="home__timer">
        <CountdownTimer />
      </div>
    </main>
  );
}

export default Home;
