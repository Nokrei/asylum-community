import React, {useState, useEffect} from "react";
import './App.scss'
import "./Testimonials.scss";
const Testimonials = () => {
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            counter < 2 ? setCounter(counter +1) : setCounter(0)
           
            
        },10000)
      
        return()=> clearInterval(interval)
    },[counter])
  const testArr = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque libero, mollis eget justo ut, condimentum gravida nisi. Vivamus commodo hendrerit metus, a dapibus odio fermentum non. Aenean ut nibh turpis. Praesent in nisl lectus. Maecenas vel lectus neque. Cras vel aliquet mauris. Morbi posuere nisl quis nibh eleifend semper. Etiam sed luctus nisi, id vehicula libero. Nullam nec arcu vehicula ligula venenatis condimentum a quis erat. Aenean id maximus enim. Curabitur vitae mollis sem, euismod laoreet ipsum. Curabitur in dignissim nisi.",
    "Etiam eleifend dui eu tellus volutpat, at cursus ligula convallis. Praesent mattis eu purus a venenatis. Nulla eu enim eget massa feugiat varius quis sed tortor. Vestibulum condimentum mattis eros, non placerat quam fringilla sed. Mauris vitae lacinia tellus, a facilisis libero. Nullam dignissim mauris a orci dignissim porta. Quisque suscipit nisi in ultricies porttitor. Vestibulum dignissim neque et felis viverra egestas nec et ligula. Etiam euismod dui vel tempus egestas. Aenean semper diam turpis, sit amet faucibus arcu tincidunt eget.",
    "Nullam nisl quam, pretium vel rutrum et, consequat sed ipsum. Sed ac interdum velit. Nulla sed turpis ut metus vestibulum ornare. Cras sit amet convallis sem. Maecenas viverra iaculis mi. Curabitur eu elit eleifend, sollicitudin elit at, facilisis leo. In ullamcorper, nisi et vulputate imperdiet, justo odio scelerisque enim, quis euismod quam tellus in dolor. Phasellus tempor accumsan ante, at auctor dui blandit ac. Donec scelerisque, lectus vitae efficitur facilisis, sem diam consequat sapien, ut sodales lacus lacus vel est. Sed tristique eu felis in varius. Phasellus porta, nunc eget malesuada iaculis, neque quam commodo sapien, vitae congue ante nibh ac metus.",
  ];
  return <div className="testimonials">
      <div className='testimonial-container white-font'>
           <span className='testimonial'>{testArr[counter]}</span> 
      </div>
  </div>;
};

export default Testimonials;
