import React from "react";
import "./Page8.css";
import Page8Card from "./Page8Card";
import Page8Card2 from "./Page8Card2";
import Card3 from "./Card3";
import Navbar from "../Header/Navbar";
const Page8 = () => {
  return (
    <>
    <div className="navbar">
      <Navbar/>
    </div>
    <div className="Page8">
      <div className="write">
        <h1 className="writeh1">Subscription Plans</h1>
        <h3 className="wrieth3">Choose The Plane That Suits For You</h3>
      </div>
      <div className="write-card">
        <Page8Card />
        <Page8Card2 />
        {/* <Page8Card/> */}
        <Card3 />
      </div>
    </div>
    </>
  );
};

export default Page8;
