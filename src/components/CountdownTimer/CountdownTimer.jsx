import { Fragment } from 'react'
import "./CountdownTimer.scss";

const blocks = ['days', 'hours', 'minutes', 'seconds'];

function CountdownTimer({deadlineTimestamp}) {
  /* 
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
  */
  return (
    <div className="countdown-timer">
      {blocks.map((key, i, arr) => {
        return (
          <Fragment key={i}>
            <div className="countdown-timer__block">
              <div className="countdown-timer__number">05</div>
              <div className="countdown-timer__text">{key}</div>
            </div>
            {i !== arr.length - 1 && <div className="countdown-timer__connector">:</div>}
          </Fragment>
        );
      })}
    </div>
  );
}

export default CountdownTimer;
