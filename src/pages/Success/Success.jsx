import { Link } from "react-router-dom";
import "./Success.scss";
import { useEffect } from "react";

function Success() {
  useEffect(() => {
    localStorage.removeItem("data");
  }, []);

  return (
    <div className="payment">
      <h3>Success!</h3>
      <p>Your reference ID is XXXXXXX</p>
      <p>Please check your email to see details.</p>
      <div className="payment__homepage-button-wrapper">
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
