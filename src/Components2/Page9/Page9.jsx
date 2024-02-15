import React from "react";
import Page8Card from "../Page8/Page8Card";
import Page8Card2 from "../Page8/Page8Card2";
import Card3 from "../Page8/Card3";
import Page9DiffCard from "./Page9DiffCard";
import Billing from "./Billing";
import Navbar from "../Header/Navbar";

const Page9 = () => {
  return (
  <>
  <div className="navbar">
    <Navbar/>
  </div>
    <div className="page9Par">
      <div className="Page9">
        <div className="write">
          <h1 className="writeh1">Subscription Plans</h1>
          <h3 className="wrieth3">Manage your plan and biling history</h3>
        </div>
        <div className="write-card">
          <Page8Card />
          <Page9DiffCard />
          <Card3 />
        </div>
      </div>

      <Billing />
    </div>
    </>
  );
};

export default Page9;
