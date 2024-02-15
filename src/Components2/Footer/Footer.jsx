import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-img">
        <img src="/Images/FooterImg.png" alt="" />
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-leftimg">
            <img src="/Images/Footerlogo.png" alt="" />
          </div>
          <div className="footer-imgdowncont">
            <h1 className="imgdownconth1">Subscribe To Our Newsletter!</h1>
            <p className="imgdownconttp">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>

            <div className="inputtype">
              <input type="text" placeholder="Your email address" />

              <div className="subs-button">
                <button className="btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="divuu">
            <div className="firstList">
              <h3 className="divuh3">Quick Links</h3>
              <ul className="divuul">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className="firstList">
              <h3 className="divuh3">Support</h3>
              <ul className="divuul">
                <li>Contact us</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="thirdList">
              <h3 className="div3uh3">Follow Us</h3>
              <ul className="div3ull">
                <div className="fb-logo">
                  <img
                    className="add-logoimg"
                    src="/Images/fbLogo2.png"
                    alt=""
                  />
                  <li>Facebook</li>
                </div>
                <div className="twit-logo">
                  <img
                    className="add-logoimg"
                    src="/Images/twitLogo.png"
                    alt=""
                  />

                  <li>Twitter</li>
                </div>
                <div className="insta-logo">
                  <img src="/Images/Vector (6).png" alt="" />
                  <li>Instagram</li>
                </div>
                <div className="yt-logo">
                  <img src="/Images/Vector (7).png" alt="" />
                  <li>Youtube</li>
                </div>
              </ul>
            </div>
          </div>

          <div className="google-apple-btn">
            <h3 className="gettt">Get the app</h3>
           <div className="two-google-app-storebtn">
           <div className="goo-playstore">
              <div className="google-icn">
                <img src="/Images/play22.jpeg" alt="" />
              </div>
              <div className="contnt-playstr">
                <h5 className="playstr22">GET IT ON</h5>
                <h4 className="playstr23">Google Play</h4>
              </div>
            </div>
            <div className="goo-playstore apple">
            <div className="google-icn">
              <img src="/Images/apple22.png" alt="" />
            </div>
            <div className="contnt-playstr">
              <h5 className="playstr22">GET IT ON</h5>
              <h4 className="playstr23">Google Play</h4>
            </div>
          </div>
          </div>

          
           </div>

          {/* Google button goes here for footer */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
