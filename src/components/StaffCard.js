import React from "react";
import { useInView } from "react-intersection-observer";
import "./App.scss";
import "./Staff.scss";
const StaffCard = (props) => {
  // Use the react intersection observer to determine if a card is in the viewport
  // and assing style accordingly.
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={props.cardClass}
      style={{
        transform: `translateX(${inView ? 0 : props.direction})`,
        flexDirection: props.flex,
       
      }}
    >
      <div className="staff-card__image--container" style={props.grid}>
        <img className={props.class} src={props.img} />
        <img className={props.class2} src={props.img2} />
      </div>
      <div className="staff-card__text white-font" style={props.grid2}>
        <div className="staff-card__text--top">
          <div
            className="staff-card__text--title accent-font"
            style={props.titleColor}
          >
            {props.title}
          </div>
        </div>
        <div className="staff-card__text--bottom">
          <div className="staff-card__text--desc">{props.desc} </div>
          <div className="staff-card__text--tags" style={props.tags}>
            <div className="staff-card__text--role" style={props.border1}>
              {props.role}
            </div>
            <div className="staff-card__text--tag" style={props.border2}>
              {props.tag}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
