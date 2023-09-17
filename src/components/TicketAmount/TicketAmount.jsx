import { useState, useCallback } from "react";
import "./TicketAmount.scss";

const price = 29;

function TicketAmount() {
  const [amount, setAmount] = useState(1);

  const changeAmount = useCallback((e) => {
    const { type } = e.target.dataset;

    switch (type) {
      case "increment":
        if (amount < 99) {
          setAmount((prevState) => ++prevState);
        }
        break;
      case "decrement":
        if (amount > 1) {
          setAmount((prevState) => --prevState);
        }
        break;

      default:
        break;
    }
  }, [amount]);

  return (
    <div className="ticket-amount">
      <div className="ticket-amount__selection">
        <div
          className="ticket-amount__minus-button"
          data-type="decrement"
          onClick={changeAmount}
        />
        <div className="ticket-amount__amount">{amount}</div>
        <div
          className="ticket-amount__plus-button"
          data-type="increment"
          onClick={changeAmount}
        />
      </div>
      <div className="ticket-amount__price">{price * amount}AED</div>
    </div>
  );
}

export default TicketAmount;
