import React from "react";
import "./Header.css";
import HeaderCard1 from "./HeaderCard1";
import HeadFooter from "./HeadFooter";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="navba">
          <Navbar />
        </div>

        <div className="middle-content">
          <div className="midddleMainCont">
            <div className="content-left">
              <div className="teddy">
                <img src="/Images/teddyOriginal.png" alt="" />
              </div>
              <h1 className="midh1">Discover Teddy Tale Wonders Around You</h1>
              <p className="midp">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="content-right">
              <div className="mssg">
                <div className="img11">
                  <img src="/Images/mssg.png" alt="" />
                  <div className="overlay">
                    <img src="/Images/hey_buddy.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="img-right">
                <img src="/Images/teddy2.png" alt="" />
              </div>
            </div>
          </div>

          <div className="social-con">
            <div className="left-social">
              <div className="socialimg">
                {/* <img src="/Images/Social.png" alt="" /> */}
                <div className="google-apple-btn">
                  <h3 className="gettt">Download Now On </h3>
                  <div className="two-google-app-storebtn">
                    <a href="#" className="goo-playstore">
                      <div className="google-icn">
                        <img src="/Images/play22.jpeg" alt="" />
                      </div>
                      <div className="contnt-playstr">
                        <h5 className="playstr22">GET IT ON</h5>
                        <h4 className="playstr23">Google Play</h4>
                      </div>
                    </a>
                    <a href="#" className="goo-playstore apple">
                      <div className="google-icn">
                        <img src="/Images/apple22.png" alt="" />
                      </div>
                      <div className="contnt-playstr">
                        <h5 className="playstr22">Download on the</h5>
                        <h4 className="playstr23">App Store</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-social">
              <div className="social-card1">
                <div className="contuu">
                  <h3 className="socih3">10 M+</h3>
                  <p className="sociap">Downloads</p>
                </div>
              </div>
              <div className="social-card1 formar">
                <div className="contuu">
                  <h3 className="socih3">15 M+</h3>
                  <p className="sociap">Reviews</p>
                </div>
              </div>
              <div className="social-card1 formar">
                <div className="contuu1">
                  <div className="star">
                    <img src="/Images/star.svg" alt="" className="starImage" />
                    <h3 className="starh3">4.5</h3>
                  </div>

                  <p className="starpa">Ratings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mid-inside">
            <div className="img1">
              <img src="/Images/Start.png" className="mid-insideimg" alt="" />
            </div>
            <div className="img2">
              <h1 className="img22222">
                TO REACH CHILDREN, CREATE THEIR KNOW WORLD WITH TEDDY FRIEND
              </h1>
            </div>

            <div className="midpp">
              <p className="mid-insidep">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="md-outside">
            <div className="teddy2-img">
              <img
                className="teddy2-img-width"
                src="/Images/teddy2.png"
                alt=""
              />
            </div>
            <div className="fourpillar">
              <div className="img-box1">
                <div className="pillar1">
                  <img src="/Images/pillar.svg" alt="" />
                  <div className="pillar1-cont">
                    <h1 className="pillar1cont">DowNLOAD THE APP</h1>
                    <p className="pilllar1para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
                <div className="pillar1">
                  <img src="/Images/pillar.svg" alt="" />
                  <div className="pillar2-cont">
                    <h1 className="pillar1cont">DowNLOAD THE APP</h1>
                    <p className="pilllar1para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
               
              </div>
              <div className="img-box1 ">
              <div className="pillar1">
                  <img className="rotate" src="/Images/pillar.svg" alt="" />
                  <div className="pillar3-cont">
                    <h1 className="pillar1cont">DowNLOAD THE APP</h1>
                    <p className="pilllar1para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
                <div className="pillar1">
                  <img className="rotate"  src="/Images/pillar.svg" alt="" />
                  <div className="pillar4-cont">
                    <h1 className="pillar1cont">DowNLOAD THE APP</h1>
                    <p className="pilllar1para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="low-midcont">
          <HeaderCard1 />
        </div>
      </div>

      <div>
        <HeadFooter />
      </div>
      <div className="div">
        <Footer/>
      </div>
    </>
  );
};

export default Header;
