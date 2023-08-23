import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout'

import Home from './pages/Home'
import Ticket from './pages/Ticket'
import Payment from './pages/Payment'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Ticket />} />
          <Route path="dashboard" element={<Payment />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
