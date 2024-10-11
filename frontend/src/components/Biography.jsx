import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Health Hub is a comprehensive wellness center that offers a wide range of services, including fitness, nutrition, and mental health support. It aims to promote holistic well-being through personalized health plans and professional guidance. With state-of-the-art facilities and expert staff, Health Hub focuses on preventive care and sustainable lifestyle changes. Its mission is to empower individuals to lead healthier, more balanced lives.
          </p>
          
          <p>
          Health Hub is dedicated to providing a one-stop solution for all aspects of health and wellness, from physical fitness to mental well-being. Offering customized programs tailored to individual needs, it emphasizes proactive health management and long-term well-being. With cutting-edge technology and a compassionate team, Health Hub supports clients in achieving their wellness goals. Its holistic approach ensures that every aspect of a person’s health is nurtured for optimal results.
          </p>
          <p>Health Hub is awesome!</p>

        </div>
      </div>
    </>
  );
};

export default Biography;
