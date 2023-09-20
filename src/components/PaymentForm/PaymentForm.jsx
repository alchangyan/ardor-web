import cn from "classnames";
import { Link, useNavigate } from "react-router-dom";

import CTAButton from "../CTAButton";
import mastercardImg from "../../assets/images/mastercard.png";
import visaImg from "../../assets/images/visa.png";
import paypalImg from "../../assets/images/paypal.png";
import applePayImg from "../../assets/images/apple-pay.png";

import "./PaymentForm.scss";
import { useCallback, useState } from "react";

function PaymentForm() {
  const navigate = useNavigate();
  
  const [selectedMethod, setSelectedMethod] = useState(null);
  
  const handleSelect = useCallback((e) => {
    const { id } = e.currentTarget.dataset;
    setSelectedMethod(id);
  }, []);
  
  const handleSubmit = useCallback(() => {
      navigate("/success");
  }, [navigate])

  return (
    <div className="payment-form">
      <div className="payment-methods">
        <div
          className={cn("payment-method", {
            "payment-method_selected": selectedMethod === "card",
          })}
          data-id="card"
          onClick={handleSelect}
        >
          <div className="payment-method__title">Credit Card</div>
          <div className="payment-method__image">
            <img src={mastercardImg} alt="mastercard method logo" />
            <img src={visaImg} alt="visa method logo" />
          </div>
        </div>
        <div
          className={cn("payment-method", {
            "payment-method_selected": selectedMethod === "payPal",
          })}
          data-id="payPal"
          onClick={handleSelect}
        >
          <div className="payment-method__title">Pay Pal</div>
          <div className="payment-method__image">
            <img src={paypalImg} alt="paypal method logo" />
          </div>
        </div>
        <div
          className={cn("payment-method", {
            "payment-method_selected": selectedMethod === "applePay",
          })}
          data-id="applePay"
          onClick={handleSelect}
        >
          <div className="payment-method__title">Apple Pay</div>
          <div className="payment-method__image">
            <img src={applePayImg} alt="apple pay method logo" />
          </div>
        </div>
      </div>
      <div className="payment-submit-button">
        <CTAButton text="Pay Now" onClick={handleSubmit} disabled={selectedMethod === null}/>
      </div>
      <Link to="/buy-a-ticket" className="back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="34"
          viewBox="0 0 20 34"
          fill="none"
        >
          <path
            d="M17 31L3 17L17 3"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </Link>
    </div>
  );
}

export default PaymentForm;
