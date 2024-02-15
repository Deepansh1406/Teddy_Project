import React from "react";

const Card3 = () => {
  return (
    <div className="card3">
      <div className="card">
        <div className="elipimg">
          <img src="/Images/Ellipse.svg" alt="" />
        </div>
        <div className="div2">
          <h1 className="free">Premium</h1>
          <p className="freep">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>
        <div className="div3">
          <h1 className="divh3">FEATURES:</h1>
          <div className="fea-img">
            {/* <img className="fea" src="/Images/check.svg" alt="" /> */}
            <input className="inputt" type="checkbox" />
            <p className="feap">Preloaded Stories</p>
          </div>
          <div className="fea-img">
            <input className="inputt" type="checkbox" />
            <p className="feap">Unlimited Stories from Chatgpt</p>
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
        <div className="buttonbss thirdbtn">
          <button className="get">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
