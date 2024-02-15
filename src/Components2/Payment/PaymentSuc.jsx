import React from "react";

import "./Payment.css";
import Navbar from "../Header/Navbar";
const PaymentSuc = () => {
  return (
    <>
    <div className="navbar">
      <Navbar/>
    </div>
   
    <div className="PaymentSuc">
      <div className="LogoutCard">
        <div className="logout-img">
          {/* Image with less opacity */}
          <img className="overlay-image" src="/Images/Frame (1).png" alt="" />
        </div>
        <h1>Purchase Successful !</h1>
        <p className="log-pay">
          You've successfully subscribed to our Teddy Tales plan.
        </p>

        <div className="ok-button">
          <div className="ok">
            <button className="ok12">OK</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentSuc;
