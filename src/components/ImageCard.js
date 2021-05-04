import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./Gallery.scss";

const ImageCard = (props) => {
  // const [ref, inView] = useInView({
  //   threshold: 0,
  // });

  // const [spans, setSpans] = useState(0);

  // const imageRef = useRef(null);

  // const handleLoad = () => {
  //   const height = imageRef.current.clientHeight;
  //   setSpans(Math.ceil(height / 10));
  // };

  // const arr = ["100%", "100%", "-100%"];
  // const translateValue = arr[Math.floor(Math.random() * (2 - 1 + 1) + 1)];
  // const RandomInt = Math.floor(Math.random() * (10 - 1) + 1);

  return (
    <div className="image-card">
      <img
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
       
        onMouseEnter={props.imageClick}
        onMouseLeave={props.mouseLeave}
        className="image"
        src={props.src}
        alt={props.alt}
        loading="eager"
      />
    </div>
  );
};

export default ImageCard;
