import cn from "classnames";

import "./CTAButton.scss";

const circleQuantity = 40;
const circles = Array(circleQuantity).fill("");

function CTAButton({text}) {
  return (
    <div className="cta-button">
      <div className="cta-button__circles">
        {circles.map((el, i) => (
          <i
            key={i}
            className={cn("cta-button__circle", {
              [`cta-button__circle_${i + 1}`]: true,
            })}
          />
        ))}
      </div>
      <div className="cta-button__content">{text}</div>
    </div>
  );
}

export default CTAButton;
