import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <span className="testimonial-card__title">{props.title}</span>
      <div className="testimonial-card__content">{props.content}</div>
    </div>
  );
};

export default TestimonialCard;
