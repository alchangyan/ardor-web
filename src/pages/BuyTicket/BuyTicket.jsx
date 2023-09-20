import TicketAmount from '../../components/TicketAmount'
import InfoForm from "../../components/InfoForm";

import "./BuyTicket.scss";

function BuyTicket() {
  return (
    <div className="buy-ticket">
      <h2>
        Buy a <b>Ticket</b>
      </h2>
      <p>Please select the number of consultancies you would like to buy</p>
      <TicketAmount />
      <InfoForm />
    </div>
  );
}

export default BuyTicket;
