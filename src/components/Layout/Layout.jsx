import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Background from "../Background";

function Layout() {
  return (
    <div>
      <Background />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
