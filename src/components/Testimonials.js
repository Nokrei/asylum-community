import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import Slider from "infinite-react-carousel";
import useWindowDimensions from "./useWindowDimensions";
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
  } else if (width < 1500) {
    numOfSlides = 2;
  }

  // Former option with useTransition
  // // array of testimonials
  // const slides = [
  //   {
  //     id: 0,
  //     text:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.",
  //   },
  //   {
  //     id: 1,
  //     text:
  //       "Etiam eleifend dui eu tellus volutpat, at cursus ligula convallis. Praesent mattis eu purus a venenatis. Nulla eu enim eget massa feugiat varius quis sed tortor. Vestibulum condimentum mattis eros, non placerat quam fringilla sed. Mauris vitae lacinia tellus, a facilisis libero. Nullam dignissim mauris a orci dignissim porta. Quisque suscipit nisi in ultricies porttitor. Vestibulum dignissim neque et felis viverra egestas nec et ligula. Etiam euismod dui vel tempus egestas. Aenean semper diam turpis, sit amet faucibus arcu tincidunt eget.",
  //   },
  //   {
  //     id: 2,
  //     text:
  //       "Nullam nisl quam, pretium vel rutrum et, consequat sed ipsum. Sed ac interdum velit. Nulla sed turpis ut metus vestibulum ornare. Cras sit amet convallis sem. Maecenas viverra iaculis mi. Curabitur eu elit eleifend, sollicitudin elit at, facilisis leo. In ullamcorper, nisi et vulputate imperdiet, justo odio scelerisque enim, quis euismod quam tellus in dolor. Phasellus tempor accumsan ante, at auctor dui blandit ac. Donec scelerisque, lectus vitae efficitur facilisis, sem diam consequat sapien, ut sodales lacus lacus vel est. Sed tristique eu felis in varius. Phasellus porta, nunc eget malesuada iaculis, neque quam commodo sapien, vitae congue ante nibh ac metus.",
  //   },
  //   {
  //     id: 3,
  //     text:
  //       "Nullam nisl quam, pretium vel rutrum et, consequat sed ipsum. Sed ac interdum velit. Nulla sed turpis ut metus vestibulum ornare. Cras sit amet convallis sem. Maecenas viverra iaculis mi. Curabitur eu elit eleifend, sollicitudin elit at, facilisis leo. In ullamcorper, nisi et vulputate imperdiet, justo odio scelerisque enim, quis euismod quam tellus in dolor. Phasellus tempor accumsan ante, at auctor dui blandit ac. Donec scelerisque, lectus vitae efficitur facilisis, sem diam consequat sapien, ut sodales lacus lacus vel est. Sed tristique eu felis in varius. Phasellus porta, nunc eget malesuada iaculis, neque quam commodo sapien, vitae congue ante nibh ac metus.",
  //   },
  // ];
  // // state variable for useTransition.
  // const [index, set] = useState(0);

  // // useTransition from React-spring to make automatic carousel.
  // const transitions = useTransition(slides[index], (item) => item.id, {
  //   from: { opacity: 0, transform: "translateX(-200%)" },
  //   enter: { opacity: 1, transform: "translateX(0%)" },
  //   leave: { opacity: 0, transform: "translateX(200%)" },
  //   config: config.default,
  // });

  // // Transition every (10)s.
  // useEffect(
  //   () => void setInterval(() => set((state) => (state + 1) % 3), 10000),
  //   []
  // );

  // *in return statement*
  // {transitions.map(({ item, props, key }) => (
  //   <animated.div
  //     class="bg"
  //     key={key}
  //     style={{ ...props, position: "absolute" }}
  //     className="testimonial"
  //   >
  //     {item.text}
  //   </animated.div>
  // ))}

  // Set cursor style on mouse down and mouse up
  const [cursorStyle, setCursorStyle] = useState("grab");

  const handleMouseDown = () => {
    setCursorStyle("grabbing");
  };
  const handleMouseUp = () => {
    setCursorStyle("grab");
  };

  // Array of testimonials and their authors
  const testimonialArr = [
    {
      title: "Pudding",
      content:
        "'I was covered in whalecum, had a great time, would recommend!'",
    },
    {
      title: "Fruit",
      content:
        "'I only joined the server a few weeks ago but already feel like I have made a load of good friends, if you are looking for a great 18+ community, stop looking and join.'",
    },
    {
      title: "Anonymous (Says Oak)",
      content:
        "'I used to think I was innocent. Then I found heaven and heaven's name is Asylum 669.'",
    },
    {
      title: "Armour/Gonk",
      content:
        "'When it comes to Asylum 669, I feel very at peace as everyone is so delightful and welcoming. The owner is a respectful, non-biased indivdual and takes pride in what she does for her community. I feel proud to be apart of something amazing, it makes me never go AFK in a voice channel!'",
    },
    {
      title: "Krabjii",
      content:
        "'its hella fun beign here, people are so welcoming, everyone is friendy.'",
    },
    { title: "NonToxic", content: "'This place dope.'" },
    {
      title: "Pudding",
      content:
        "'I was covered in whalecum, had a great time, would recommend!'",
    },
    {
      title: "Phex",
      content:
        "'Was lured here with promises of feet pictures and wasn't disappointed.'",
    },
    {
      title: "Miz",
      content:
        "'With the ongoing pandemic, it has not been easy to go hangout and make new friends. Asylum 669 is a completely diversecommunity that makes it easier to not only make new friends, but feel like you're part of an extended family. And the best part? It's full of gamers sexy gamers!'",
    },
    {
      title: "LuckyOwl",
      content:
        "'I like the fact that I can be a part of this server it is a lot of fun. it's a really close community and even tho I just been part off the community for a couple days it has been already a lot off fun.'",
    },

    {
      title: "Celestial",
      content:
        "'I have enjoyed my stay thus far and im totally not having a knife on my neck writing this but I would like to admit before the judges of asylum669 that they are the role models of the depths of hell that I reside in.'",
    },
  ];

  return (
    <div className="testimonials white-font" id="testimonials">
      <span className="testimonials__title accent-font creepy-font">
        <h1>Testimonials</h1>
      </span>
      <div
        onMouseDown={handleMouseDown}
        onMouseUpCapture={handleMouseUp}
        style={{ cursor: cursorStyle }}
        className="testimonial-container"
      >
        <Slider
          slidesToShow={numOfSlides}
          centerMode
          wheel
          centerPadding="0"
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
