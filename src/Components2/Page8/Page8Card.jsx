import React from "react";

const Page8Card = () => {
  return (
    <div className="Page8Card">
      <div className="card">
        <div className="elipimg">
          <img src="/Images/Ellipse.svg" alt="" />
        </div>
        <div className="div2">
          <h1 className="free">Free</h1>
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
        </div>
        <div className="buttonbss">
          <button className="get">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Page8Card;
