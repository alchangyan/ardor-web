import TicketAmount from "../../components/TicketAmount";
import PaymentForm from "../../components/PaymentForm";
import "./Payment.scss";

function Payment() {
  return (
    <div className="payment">
      <h2>
        Making a <b>Payment</b>
      </h2>
      <p>Total</p>
      <TicketAmount fixed />
      <PaymentForm />
    </div>
  );
}

export default Payment;
