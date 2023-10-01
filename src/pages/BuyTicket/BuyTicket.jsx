import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import TicketAmount from "../../components/TicketAmount";
import InfoForm from "../../components/InfoForm";

import "./BuyTicket.scss";

function BuyTicket() {
  const navigate = useNavigate();
  const [ticketsAmount, setTicketsAmount] = useState(1);

  const handleTicketsCHange = useCallback((newTicketsAmount) => {
    setTicketsAmount(newTicketsAmount);
  }, []);

  const handleSubmit = useCallback((formData) => {
    const data = {
      ...formData,
      tickets: ticketsAmount
    };

    localStorage.setItem('data', JSON.stringify(data));

    navigate("/payment");
  }, [ticketsAmount, navigate]);

  return (
    <div className="buy-ticket">
      <h1>
        Buy a <b>Ticket</b>
      </h1>
      <p>Please select the number of consultancies you would like to buy</p>
      <TicketAmount onChange={handleTicketsCHange} />
      <InfoForm onSubmit={handleSubmit} />
    </div>
  );
}

export default BuyTicket;
