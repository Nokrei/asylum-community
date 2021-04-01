import React, {useState} from "react";

const TestimonialCard = (props) => {
  // Set cursor style on mouse down and mouse up
  const [cursorStyle, setCursorStyle] = useState("inherit");

  const handleMouseDown = () => {
    setCursorStyle("grabbing");
  };
  const handleMouseUp = () => {
    setCursorStyle("inherit");
  };
  return (
    <div className="testimonial-card" onMouseDown={handleMouseDown}
    onMouseOutCapture={handleMouseUp}
    onMouseUpCapture={handleMouseUp}
    style={{ cursor: cursorStyle }}>
      <div>
        <div className="testimonial-card__content">{props.content}</div>
        <div className="testimonial-card__title"> - {props.title}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
