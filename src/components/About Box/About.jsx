import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>ABOUT US</h2>
        <h4>
          15 years, we passionate about achieving better results for our clients
        </h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          reiciendis quod nihil, impedit quo exercitationem id debitis ipsum
          voluptate maiores voluptatibus sequi! Eveniet quae pariatur
          perspiciatis necessitatibus eum vitae illo rerum ipsam, quo nulla
          voluptatem, alias ipsa explicabo earum. Sit, corporis tempora!
        </p>
        <button className="read-button">Read More</button>
      </div>
      <div className="about-img">
        <img
          className="about-image"
          src="./image/thinking-man.webp"
          alt="thinking man"
        />
      </div>
    </div>
  );
};

export default About;
