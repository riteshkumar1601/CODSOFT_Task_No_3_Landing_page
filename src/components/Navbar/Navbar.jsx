import React, { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img
            className="profile-logo"
            src="./image/ritesh.png.jpeg"
            alt="profile image"
          /> */}
          <h2>LANDING PAGE</h2>

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

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "X" : "≡"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
