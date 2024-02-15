import React from "react";
import "./Payment.css";
import Navbar from "../Header/Navbar";

const PaymentFail = () => {
  return (

    <>
    <div className="navbar">
      <Navbar/>
    </div>
   
    <div className="PaymentFail">
      <div className="LogoutCard">
        <div className="logout-img">
          {/* Image with less opacity */}
          <img className="overlay-image" src="/Images/Frame (2).png" alt="" />
        </div>
        <h1>We Couldn't Process Your Payment</h1>
        {/* <p className="log-pay"></p> */}

        {/* <div className="ok-button">
          <div className="ok">
            <button className="ok12">OK</button>
          </div>
        </div> */}
        <h4 className="Failh4">Please try again.</h4>
      </div>
    </div>
    </>
  );
};

export default PaymentFail;
