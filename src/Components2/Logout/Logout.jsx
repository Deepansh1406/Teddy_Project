import React from "react";
import "./Logout.css";

const Logout = () => {
  return (
    <div className="Logout">
      {/* <div className="background-image">
        <img src="/Images/downTeddy.jpg" alt="" />
      </div> */}
      <div className="LogoutCard">
        <div className="logout-img">
          {/* Image with less opacity */}
          <img className="overlay-image" src="/Images/Frame (1).svg" alt="" />
        </div>
        <h1>Logout</h1>
        <p>Are you sure you want to logout?</p>

        <div className="logout-button">
          <div className="btn1">
            <button className="btn12">NO</button>
          </div>
          <div className="btn1">
            <button className="btn11">YES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
