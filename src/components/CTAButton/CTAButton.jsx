import cn from "classnames";

import "./CTAButton.scss";

const circleQuantity = 40;
const circles = Array(circleQuantity).fill("");

function CTAButton({ text, onClick = () => {}, disabled = false }) {
  return (
    <div
      className={cn("cta-button", {
        "cta-button_disabled": disabled,
      })}
      onClick={disabled ? () => {} : onClick}
    >
      <div className="cta-button__circles">
        {circles.map((_, i) => (
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
