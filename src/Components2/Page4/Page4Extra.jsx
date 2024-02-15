import React from "react";
import "./Page4Extraa.css";
import Navbar from "../Header/Navbar";

const Page4Extra = () => {
  return (
    <div className="Page4Extra">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="conta">
        <div className="crossimg">
          <img src="/Images/crossB.svg" alt="" />
        </div>
        <div >
          <img className="logoimg"  src="/Images/logo.png" alt="" />
          
        </div>
        <div className="main-cont">
          <h2 className="mainh2">We Value Your Privacy</h2>
          <p className="mainp">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.In publishing
            and graphic design, Lorem ipsum is a placeholder text commonly used
            to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available. In publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available.In publishing and graphic
            design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available.
          </p>
          <div className="terms">
            <p>Terms & Conditions</p>
            <p className="ters-pri">Privacy Policy</p>
            <p className="ters-pri">More Information</p>
          </div>
        </div>
        <div className="buttons-extraa">
            <div className="button1">
            <button className="btn69">Deny Cookies</button>
            </div>
            <div className="button2">
            <button className="btn68">Deny Cookies</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page4Extra;
