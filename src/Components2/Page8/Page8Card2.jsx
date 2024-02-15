import React from "react";
import "./Card2.css";

const Page8Card2 = () => {
  return (
    <div className="Page8Card2">
      <div className="card2">
        <div className="elipimg">
          <img src="/Images/Ellipse.svg" alt="" />
        </div>
        <div className="div2">
          <h1 className="free">Basic</h1>
          <p className="freep">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>
        <div className="div32">
          <h1 className="divh3">FEATURES:</h1>
          <div className="fea-img">
            <input className="inputt" type="checkbox" />
            <p className="feap">Preloaded Stories</p>
          </div>
          <div className="fea-img">
            <input className="inputt" type="checkbox" />
            <p className="feap">15 Stories from Chatgpt</p>
          </div>
        </div>
        <div className="fort">
          <h1 className="for">For:</h1>
          <div className="fea-img">
            <input className="inputt" type="checkbox" />
            <p className="month">Monthly</p>
          </div>
          <div className="fea-img">
            <input className="inputt" type="checkbox" />
            <p className="month">Yearly</p>
          </div>
        </div>
        <div className="buttonbss2">
          <button className="get">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Page8Card2;
