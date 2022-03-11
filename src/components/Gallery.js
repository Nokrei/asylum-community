import React, { useState, useRef, useEffect, useContext } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import dictionary from "../images/gallery/dictionary.jpg";
import elizaDraw from "../images/gallery/elizaDraw.jpg";
import feralDraw from "../images/gallery/feralDraw.jpg";
import gameNight from "../images/gallery/gameNight.jpg";
import graceDraw from "../images/gallery/graceDraw.jpg";
import gonk from "../images/gallery/gonk.jpg";
import gonk2 from "../images/gallery/gonk2.jpg";
import gonk3 from "../images/gallery/gonk3.jpg";
import myrp from "../images/gallery/myrp.jpg";
import oak from "../images/gallery/oak.jpg";
import room from "../images/gallery/room.jpg";
import shrek from "../images/gallery/shrek.jpg";
import stack1 from "../images/gallery/stack1.jpg";
import stack2 from "../images/gallery/stack2.jpg";
import stack3 from "../images/gallery/stack3.jpg";
import stack4 from "../images/gallery/stack4.jpg";
import stack5 from "../images/gallery/stack5.jpg";
import twinkle from "../images/gallery/twinkle.jpg";
import quote1 from "../images/gallery/quotes/quote1.png";
import quote2 from "../images/gallery/quotes/quote2.png";
import quote3 from "../images/gallery/quotes/quote3.png";
import quote4 from "../images/gallery/quotes/quote4.png";
import quote5 from "../images/gallery/quotes/quote5.png";
import quote6 from "../images/gallery/quotes/quote6.png";
import quote7 from "../images/gallery/quotes/quote7.png";
import quote8 from "../images/gallery/quotes/quote8.png";

import quote10 from "../images/gallery/quotes/quote10.png";
import quote11 from "../images/gallery/quotes/quote11.png";
import quote12 from "../images/gallery/quotes/quote12.png";
import quote13 from "../images/gallery/quotes/quote13.png";
import quote14 from "../images/gallery/quotes/quote14.png";
import quote15 from "../images/gallery/quotes/quote15.png";
import quote16 from "../images/gallery/quotes/quote16.png";
import quote17 from "../images/gallery/quotes/quote17.png";
import quote18 from "../images/gallery/quotes/quote18.png";
import quote19 from "../images/gallery/quotes/quote19.png";
import { debounce } from "../utils/helpers";
import AppContext from "./AppContext";
import ImageCard from "./ImageCard";
import ToTop from "./ToTop";
import Footer from "./Footer";
import "./App.scss";
import "./Gallery.scss";

const Gallery = () => {
  // Arrays for images.
  const mainArr = [dictionary, gameNight, room, shrek];
  const quotesArr = [
    quote1,
    quote2,
    quote3,
    quote4,
    quote5,
    quote6,
    quote7,
    quote8,
    quote10,
    quote11,
    quote12,
    quote13,
    quote14,
    quote15,
    quote16,
    quote17,
    quote18,
    quote19,
  ];

  const artArr = [elizaDraw, feralDraw, graceDraw, myrp, oak, twinkle];
  const scienceArr = [
    gonk,
    gonk2,
    gonk3,
    stack1,
    stack2,
    stack3,
    stack4,
    stack5,
  ];

  // State variable to store which array of images is supposed to be mapped.
  const [imageArr, setImageArr] = useState(mainArr);

  // State variable to store colors for gallery section titles.
  const [isActiveColor, setIsActiveColor] = useState({
    mainColor: "#9fb5db",
    artColor: "#b2696e",
    scienceColor: "#b2696e",
    quotesColor: "#b2696e",
  });

  // Set gallery section title color and gollery content accordingy to user's choice.
  const handleGalleryChoice = (e) => {
    if (e.target.innerHTML === "main") {
      setImageArr(mainArr);
      setIsActiveColor({
        mainColor: "#9fb5db",
        campaignColor: "#b2696e",
        artColor: "#b2696e",
        scienceColor: "#b2696e",
        quotesColor: "#b2696e",
      });
    }
    if (e.target.innerHTML === "arts &amp; crafts") {
      setImageArr(artArr);
      setIsActiveColor({
        mainColor: "#b2696e",
        campaignColor: "#b2696e",
        artColor: "#9fb5db",
        scienceColor: "#b2696e",
        quotesColor: "#b2696e",
      });
    }
    if (e.target.innerHTML === "science with gonk") {
      setImageArr(scienceArr);
      setIsActiveColor({
        mainColor: "#b2696e",
        campaignColor: "#b2696e",
        artColor: "#b2696e",
        scienceColor: "#9fb5db",
        quotesColor: "#b2696e",
      });
    }
    if (e.target.innerHTML === "famous quotes") {
      setImageArr(quotesArr);
      setIsActiveColor({
        mainColor: "#b2696e",
        campaignColor: "#b2696e",
        artColor: "#b2696e",
        scienceColor: "#b2696e",
        quotesColor: "#9fb5db",
      });
    }
  };

  const [focusImage, setFocusImage] = useState(imageArr[0]);
  const [focusClass, setFocusClass] = useState("focus-image");
  useEffect(() => {
    setFocusImage(imageArr[0]);
  }, [imageArr]);

  const handleImageClick = (e) => {
    setFocusImage(e.target.src);
    setFocusClass("focus-image__animated");
  };

  const handleMouseLeave = () => {
    setFocusClass("focus-image");
  };

  // For NavBar
  // Global state to get scroll position for navBar and ToTop animations.
  const [globalState, setGlobalState] = useContext(AppContext);

  // State variables to get values for NavBar animation
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Handle scroll event, dynamically push values to variables
  const handleScroll = debounce((e) => {
    const currentScrollPos = e.target.scrollTop;
    setGlobalState({
      visible:
        prevScrollPos > currentScrollPos + 10 ||
        currentScrollPos < prevScrollPos,
    });
    setPrevScrollPos(currentScrollPos);
  }, 1);

  return (
    <div onScroll={handleScroll} className="gallery">
      <div id="top" className="gallery-container">
        <span className="gallery-title creepy-font blue-font">
          <h1>Gallery</h1>
        </span>
        <div className="gallery-sections accent-font">
          <span
            onClick={handleGalleryChoice}
            className="gallery-section gallery-section__main"
            style={{
              color: isActiveColor.mainColor,
            }}
          >
            main
          </span>
          <span
            onClick={handleGalleryChoice}
            className="gallery-section gallery-section__art"
            style={{
              color: isActiveColor.artColor,
            }}
          >
            arts & crafts
          </span>
          <span
            onClick={handleGalleryChoice}
            className="gallery-section gallery-section__science"
            style={{
              color: isActiveColor.scienceColor,
            }}
          >
            science with gonk
          </span>
          <span
            onClick={handleGalleryChoice}
            className="gallery-section gallery-section__quotes"
            style={{
              color: isActiveColor.quotesColor,
            }}
          >
            famous quotes
          </span>
        </div>
        <div className="gallery-images">
          <div className="focus-image__container">
            <img
              src={focusImage}
              className={focusClass}
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <ScrollContainer hideScrollbars={false} className="gallery-content">
            {imageArr.map((image) => {
              return (
                <ImageCard
                  key={image}
                  src={image}
                  alt={image}
                  imageClick={handleImageClick}
                  mouseLeave={handleMouseLeave}
                />
              );
            })}
          </ScrollContainer>
        </div>
      </div>
      <ToTop
        style={{
          transform: globalState.visible ? `scale(0)` : "scale(1)",
          transition: "all 0.2s",
        }}
        link="/gallery#top"
      />
      <Footer />
    </div>
  );
};

export default Gallery;
