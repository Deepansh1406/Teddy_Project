import React from "react";
import "./Page7.css";
import Navbar from "../Header/Navbar";

const Page7 = () => {
  return (

    <>
     <div className="navbar">
      <Navbar/>
    </div>
    <div className="papa">
   
    <div className="Page7">
      
      <div className="sevenCard">
        <div className="immg">
          <img src="/Images/logo.png" alt="" />
        </div>
        <h1>SIGN IN</h1>
        <div className="threeLogin">
          <button className="threebtns">
            <img src="/Images/google.png" alt="" />
            <p className="threep">Continue with Google</p>
          </button>
          <button className="threebtns">
            <img src="/Images/fb.png" alt="" />
            <p className="threep">Continue with Google</p>
          </button>
          <button className="threebtns">
            <img src="/Images/apple.svg" alt="" />
            <p className="threep">Continue with Google</p>
          </button>
        </div>
        <div className="checkboxpar">
          <input className="checkbox" type="checkbox" />
          <label className="labb">
            By clicking you agree to our{" "}
            <a href="#" className="termu">Terms & Conditions</a> and{" "}
            <a href="#" className="termu">Privacy Policy</a>
          </label>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Page7;
