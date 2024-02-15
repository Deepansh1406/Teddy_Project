import React from "react";
import "./Page3.css";
import Navbar from "../Header/Navbar";

const Page3 = () => {
  return (

    <>
    <div className="navbar">
      <Navbar/>
    </div>
   
    <div className="Page3">
  
      <div className="content1">
        <h1 className="conth1">Frequently Asked Question</h1>
     
      </div>
      <div className="content2">
      <hr  className="up-hr" />
        <div className="head">
          <h2 className="headh2">The most popular question</h2>
     
          <div className="cross"> &#x2717;</div>
        </div>
        <hr className="up-hr"  />
        <div className="threelorem">
          <p className="loremp">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. simply so that a dummy text of the gone.
          </p>
          <p className="loremptwo">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. simply so that a dummy text of the gone. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.{" "}
          </p>
          <p className="loremp threre">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. simply so that a dummy text of the gone.
          </p>
        </div>
        <br />
        <br />
        <hr className="up-hr"  />

       <div className="sevenques">
       <div className="head">
          <h2 className="headh2">The most popular question</h2>
          {/* <img src="/Images/plus.svg" alt="" /> */}
          <div className="plus">+</div>
        </div>
        <hr className="up-hr" />
       <div className="head">
          <h2 className="headh2">The most popular question</h2>
          <div className="plus">+</div>
        </div>
        <hr className="up-hr"  />
       <div className="head">
          <h2 className="headh2">The most popular question</h2>
          <div className="plus">+</div>
        </div>
        <hr className="up-hr" />
       <div className="head">
          <h2 className="headh2" >The most popular question</h2>
          <div className="plus">+</div>
        </div>
        <hr className="up-hr" />
       <div className="head">
          <h2 className="headh2">The most popular question</h2>
          <div className="plus">+</div>
        </div>
        <hr className="up-hr"  />
       <div className="head">
          <h2 className="headh2">The most popular question</h2>
          <div className="plus">+</div>
        </div>
        <hr className="up-hr" />
       </div>

      </div>
    </div>
    </>
  );
};

export default Page3;
