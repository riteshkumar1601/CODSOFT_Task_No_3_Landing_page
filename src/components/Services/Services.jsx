import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="Service-conatiner">
      <h2>OUR SERVICES</h2>
      <div className="service-content">
        <div className="service-item">
          <img src="./image/user-interface.jpeg" alt="user experience" />
          <div className="button-content">
            <img src="./image/user-enterf-icon.png" alt="support team" />
            <button className="btn-1">USER EXPERIENCE</button>
          </div>
        </div>

        <div className="service-item">
          <img src="./image/creative-design.jpeg" alt="user experience" />
          <div className="button-content">
            <img src="./image/creative-desi-icon.png" alt="support team" />
            <button className="btn-2">CREATIVE DESIGN</button>
          </div>
        </div>

        <div className="service-item">
          <img src="./image/cyber-security.jpeg" alt="user experience" />
          <div className="button-content">
            <img src="./image/cyber-sec-icon.png" alt="support team" />
            <button className="btn-3">CYBER SECURITY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
