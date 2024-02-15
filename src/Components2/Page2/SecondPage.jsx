import React, { useState } from "react";
import './page2.css'
import Footer from "../Footer/Footer";
import { FaEnvelope } from 'react-icons/fa';
import { FaUser} from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../Header/Navbar";


const SecondPage = () => {
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {

      setCaptchaVerified(value !== null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (isCaptchaVerified) {
        
        console.log("Form submitted!");
        // formRef.current.reset();
    } else {
      
        console.log("reCAPTCHA not verified. Please complete the challenge.");
    }
};
  return (
    <>
<div className="navbar">
  <Navbar/>
</div>
    <div className="secondpage">
    
         <div className="page2">
      <div className="leftside">
        <div className="wirting">
          <h1 className="writh1">Get in touch with us</h1>
          <p className="writep">
            Lorem ipsum dolor sit amet consectetur. Sit risus id placerat morbi.
            Velit pellentesque sed duis id aliquam quis leo congue.
          </p>
        </div>
        <form action="post" className="left-card">
         <div className="left-in">
         <div className="mutiple-input">
            <div className="input1  cheks">
              
            <FaUser className="icon" />
              <input type="text" placeholder="Your name" />
              
            </div>
            <div className="input1 cheks">
            <FaEnvelope className="icon" />
              <input type="text" placeholder="Your email" />
            </div>
            <div className="input1 cheks">
            <IoIosCall className="icon" />
              <input type="text" placeholder="Your phone" />
            </div>
            <div className="input1">
        
    <textarea rows="6" placeholder="Message here"></textarea>
  </div>

            <div className="captcha">
              {/* <img src="/Images/captcha.png" alt="" /> */}

                  {/* Your form fields go here */}
            
            {/* Add the reCAPTCHA component */}
            <ReCAPTCHA
                sitekey="6Lfld1kpAAAAAFNBsZKhZKViQt-vf5aE4ZxHiYe1"
                onChange={handleCaptchaChange}
            />
            </div>
            <div className="send-btn">
              <button type="submit" onClick={handleSubmit} className="send">Send Message</button>
            </div>
          </div>
         </div>
        </form>
      </div>
      <div className="rightside">
        <div className="img">
            <img src="/Images/page2teddy.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="footer">
        {/* <Footer/> */}
    </div>

    </div>
    </>
   
  );
};

export default SecondPage;
