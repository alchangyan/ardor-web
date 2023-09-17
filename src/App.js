import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import BuyTicket from "./pages/BuyTicket";
import Payment from "./pages/Payment";
import NoMatch from "./pages/NoMatch";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Layout secondary={location.pathname !== "/"} />}
        >
          <Route index element={<Home />} />
          <Route path="buy-a-ticket" element={<BuyTicket />} />
          <Route path="payment" element={<Payment />} />
          <Route path="success" element={<Payment />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
