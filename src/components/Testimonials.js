import React from "react";
import Slider from "infinite-react-carousel";
import useWindowDimensions from "../utils/useWindowDimensions";
import "./App.scss";
import "./Testimonials.scss";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  // Get client width from custom hook
  const { width } = useWindowDimensions();

  // Setting state in useEffect makes Slider crash, setting state alone - to many re-renders
  // Therefore re-asigning new values to numOfSlides variable with if / else.
  let numOfSlides = 4;

  if (width < 2000 && width > 1500) {
    numOfSlides = 3;
  } else if (width < 1500 && width > 1025) {
    numOfSlides = 2;
  } else if (width <= 1025 ) {
    numOfSlides = 1;
  }

  // Array of testimonials and their authors
  const testimonialArr = [
    {
      title: "Fruit",
      content: `"I only joined the server a few weeks ago but already feel like I have made a load of good friends, if you are looking for a great 18+ community, stop looking and join."`,
    },
    {
      title: "Anonymous (Says Oak)",
      content: `"I used to think I was innocent. Then I found heaven and heaven's name is Asylum 669."`,
    },
    {
      title: "Armour/Gonk",
      content: `"When it comes to Asylum 669, I feel very at peace as everyone is so delightful and welcoming. The owner is a respectful, non-biased indivdual and takes pride in what she does for her community. I feel proud to be apart of something amazing, it makes me never go AFK in a voice channel!"`,
    },
    {
      title: "Krabjii",
      content: `"its hella fun beign here, people are so welcoming, everyone is friendy."`,
    },
    { title: "NonToxic", content: `"This place dope."` },
    {
      title: "Feral",
      content: `"Great server with amazing people, that are very welcoming. Events happens frequently with variety and there's almost always someone to play with."`,
    },
    {
      title: "Pudding",
      content: `"I was covered in whalecum, had a great time, would recommend!"`,
    },
    {
      title: "Phex",
      content: `"Was lured here with promises of feet pictures and wasn't disappointed."`,
    },
    {
      title: "Miz",
      content: `"With the ongoing pandemic, it has not been easy to go hangout and make new friends. Asylum 669 is a completely diversecommunity that makes it easier to not only make new friends, but feel like you're part of an extended family. And the best part? It's full of gamers sexy gamers!"`,
    },
    {
      title: "LuckyOwl",
      content: `"I like the fact that I can be a part of this server it is a lot of fun. it's a really close community and even tho I just been part off the community for a couple days it has been already a lot off fun."`,
    },

    {
      title: "Celestial",
      content: `"I have enjoyed my stay thus far and im totally not having a knife on my neck writing this but I would like to admit before the judges of asylum669 that they are the role models of the depths of hell that I reside in"`,
    },
  ];

  return (
    <div className="testimonials white-font" id="testimonials">
      <span className="testimonials__title accent-font creepy-font">
        <h1>Testimonials</h1>
      </span>
      <div className="testimonial-container">
        <Slider
          slidesToShow={numOfSlides}
          dots
          dotsClass="carousel-dots"
          centerMode
          wheel
          centerPadding={0}
          arrows={false}
        >
          {testimonialArr.map((testimonial) => {
            return (
              <TestimonialCard
                key={testimonial.title}
                title={testimonial.title}
                content={testimonial.content}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
