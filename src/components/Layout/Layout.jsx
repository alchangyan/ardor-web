import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Background from "../Background";

import "./Layout.scss";

function Layout({secondary = false}) {
  return (
    <div className="layout">
      <Background secondary={secondary} />
      <Header />
      {/* <div className="layout__content">
        <Outlet />
      </div>
      <Footer /> */}
    </div>
  );
}

export default Layout;
