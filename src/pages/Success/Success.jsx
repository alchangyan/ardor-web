import { Link } from "react-router-dom";
import { useEffect } from "react";

import "./Success.scss";

function Success() {
  useEffect(() => {
    localStorage.removeItem("data");
  }, []);

  return (
    <div className="success">
      <h3>Success!</h3>
      <p>Your reference ID is XXXXXXX</p>
      <p>Please check your email to see details.</p>
      <div className="success__homepage-button-wrapper">
        <Link to="/">
          <div className="light-button" data-modal-id="winners">
            Home Page
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Success;
