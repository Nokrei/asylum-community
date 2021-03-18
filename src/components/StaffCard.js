import React from "react";
import "./App.scss";
import "./Staff.scss";
const StaffCard = (props) => {
  return (
    <div className="staff-card" style={props.style}>
      <div className="staff-card__image--container">
        <img className="staff-card__image" src={props.img} />
        <img className="staff-card__image2" src={props.img2} />
      </div>
      <div className="staff-card__text white-font">
        <div className="staff-card__text--title accent-font">{props.title}</div>
        <div className="staff-card__text--desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default StaffCard;
