import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <div>
        <div className="testimonial-card__content">{props.content}</div>
        <div className="testimonial-card__title"> - {props.title}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
