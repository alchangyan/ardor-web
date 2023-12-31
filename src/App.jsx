import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import BuyTicket from "./pages/BuyTicket";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
          <Route path="success" element={<Success />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
