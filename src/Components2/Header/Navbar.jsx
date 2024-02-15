import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSignInClick = () => {
    // Redirect to the Sign In page
    navigate("/signin");
    // Close the menu after clicking on a link
    setMenuOpen(false);
  };

  const handleHomeImgClick = () => {
    // Redirect to the home page
    navigate("/");
  };

  const handleToggleMenu = () => {
    // Toggle the visibility of the menu
    setMenuOpen(!isMenuOpen);
  };
  const slideFunx = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  return (
    // <div className="navbar">
    //   <div className="img-logo">
    //     <div className="threeslide-Icons">
    //       {/* Hamburger menu icon */}
    //       <a href="javascript:void(0);" className="icon" onClick={handleToggleMenu}>
    //         <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
    //       </a>
    //     </div>
    //     <div className="img-headlogo">
    //       <img onClick={handleHomeImgClick} src="/Images/logo.png" alt="" />
    //     </div>

    //     <div className={`list-items ${isMenuOpen ? 'menu-open' : ''}`}>
    //       <ul className="ul-list">
    //         <li>
    //           <Link to="/subscriptions" onClick={handleSignInClick}>
    //             SUBSCRIPTION
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/contact" onClick={handleSignInClick}>
    //             CONTACT US
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/testimonials" onClick={handleSignInClick}>
    //             TESTIMONIALS
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/faqs" onClick={handleSignInClick}>
    //             FAQS
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //
    // </div>

    <div className="topnav">
      <div className="img-headlogo">
        <img onClick={handleHomeImgClick} src="/Images/logo.png" alt="" />
      </div>
      <div id="myLinks">
        <ul className="ul-list">
          <li>
            <Link to="/subscriptions" onClick={handleSignInClick}>
              SUBSCRIPTION
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleSignInClick}>
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={handleSignInClick}>
              TESTIMONIALS
            </Link>
          </li>
          <li>
            <Link to="/faqs" onClick={handleSignInClick}>
              FAQS
            </Link>
          </li>

          <li>
          <div className="sign-in">
          <button onClick={handleSignInClick}>Sign In</button>
        </div>
          </li>
        </ul>

       
      </div>

      <a href="javascript:void(0);" class="icon" onClick={slideFunx}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Navbar;
