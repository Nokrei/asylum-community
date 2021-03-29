import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import ScrollContainer from 'react-indiana-drag-scroll'
import "./App.scss";
import "./Testimonials.scss";
import TestimonialCard from './TestimonialCard'
const Testimonials = () => {
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
  const [cursorStyle, setCursorStyle] = useState('grab')

  const handleMouseDown = ()=>{
    setCursorStyle('grabbing')
  }
  const handleMouseUp = () =>{
    setCursorStyle('grab')
  }

  return (
    <div className="testimonials white-font" id="testimonials">
      <span className="testimonials__title accent-font">
        <h1>Testimonials</h1>
      </span>
      <ScrollContainer hideScrollbars='false' onStartScroll={handleMouseDown} onEndScroll={handleMouseUp} style={{cursor:cursorStyle}} className="testimonial-container">
      <TestimonialCard title='One' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.'/>
      <TestimonialCard title='Two' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.'/>
      <TestimonialCard title='Three' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.'/>
      <TestimonialCard title='Four' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.'/>
      <TestimonialCard title='Five' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.'/>
      <TestimonialCard title='Six' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.'/>
      <TestimonialCard title='Seven' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.'/>
      <TestimonialCard title='Eight' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.'/>
      </ScrollContainer>
    </div>
  );
};

export default Testimonials;
