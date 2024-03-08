import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img
            className="profile-logo"
            src="./image/ritesh.png.jpeg"
            alt="profile image"
          />

          <ul>
            <li>
              <a className="menu-item" href="">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Blog
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Page
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Services
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Support
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Contact
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Buy Now
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
