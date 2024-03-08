import React from "react";
import "./Decision.css";

const Decision = () => {
  return (
    <div className="decision-container">
      <div className="decision-content">
        <div className="decision-item">
          <img src="./image/business-icon.png" alt="launch business" />
          <h5>LAUNCH BUSINESS</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          blanditiis perspiciatis quod at iusto optio, iste suscipit!
        </p>
      </div>

      <div className="decision-content">
        <div className="decision-item">
          <img src="./image/support-icon.png" alt="support team" />
          <h5>ONLINE SUPPORT TEAM</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          blanditiis perspiciatis quod at iusto optio, iste suscipit!
        </p>
      </div>

      <div className="decision-content">
        <div className="decision-item">
          <img src="./image/clock-icon.png" alt="time management" />
          <h5>TIME MANAGEMENT</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          blanditiis perspiciatis quod at iusto optio, iste suscipit!
        </p>
      </div>
    </div>
  );
};

export default Decision;
