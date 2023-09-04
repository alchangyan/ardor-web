import { useCallback, useState } from "react";
import cn from "classnames";
import "./Accordion.scss";

const items = [
  {
    title: "What happens when I win the jackpot?",
    content:
      "The most convenient and recommended way to make withdrawals is by accessing your account on our desktop website. You can withdraw funds from your account with payment methods you have used previously for payments and/or deposits. You cannot withdraw funds in excess of what you deposited with your payment method due to our adherence to anti-money laundering regulations. Winnings can be withdrawn with a bank transfer.",
  },
  {
    title: "How do I receive my winnings?",
    content:
      "The most convenient and recommended way to make withdrawals is by accessing your account on our desktop website. You can withdraw funds from your account with payment methods you have used previously for payments and/or deposits. You cannot withdraw funds in excess of what you deposited with your payment method due to our adherence to anti-money laundering regulations. Winnings can be withdrawn with a bank transfer.",
  },
  {
    title: "How do I deposit funds in my account?",
    content:
      "The most convenient and recommended way to make withdrawals is by accessing your account on our desktop website. You can withdraw funds from your account with payment methods you have used previously for payments and/or deposits. You cannot withdraw funds in excess of what you deposited with your payment method due to our adherence to anti-money laundering regulations. Winnings can be withdrawn with a bank transfer.",
  },
  {
    title: "Is the Lotter connected to official lottery organisations?",
    content:
      "The most convenient and recommended way to make withdrawals is by accessing your account on our desktop website. You can withdraw funds from your account with payment methods you have used previously for payments and/or deposits. You cannot withdraw funds in excess of what you deposited with your payment method due to our adherence to anti-money laundering regulations. Winnings can be withdrawn with a bank transfer.",
  },
  {
    title: "How do I withdraw funds from my account?",
    content:
      "The most convenient and recommended way to make withdrawals is by accessing your account on our desktop website. You can withdraw funds from your account with payment methods you have used previously for payments and/or deposits. You cannot withdraw funds in excess of what you deposited with your payment method due to our adherence to anti-money laundering regulations. Winnings can be withdrawn with a bank transfer.",
  },
];

function Accordion() {
  const [opened, setOpened] = useState("0");

  const handleClick = useCallback((e) => {
    const { id } = e.currentTarget.dataset;

    setOpened((prevState) => {
      if (prevState !== id) {
        return id;
      }

      return null;
    });
  }, []);

  return (
    <div className="accordion">
      {items.map(({ title, content }, index) => (
        <div
          key={index}
          className={cn("accordion-item", {
            "accordion-item_opened": opened === String(index),
          })}
        >
          <div
            className="accordion-item__title"
            data-id={index}
            onClick={handleClick}
          >
            {title}
          </div>
          <div className="accordion-item__content">{content}</div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
