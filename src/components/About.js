import React, { useState } from "react";
import "./App.scss";
import "./About.scss";

const About = () => {
  // Lot of repetetive code here, will need to refactor

  // state variables for visibility of the three about sections
  const [visibility, setVisibility] = useState({
    one: "visible",
    two: "hidden",
    three: "hidden",
  });

  // State variables for navigation button colors
  const [circleClass, setCircleClass] = useState({
    one: "button__circle--active",
    two: "button__circle",
    three: "button__circle",
  });

  // Function to set visibility of sections and circle colors when going to next (to much code)
  const handleNext = () => {
    if (visibility.one == "visible" || visibility.three == "visible") {
      setVisibility({
        one: "hidden",
        two: "visible",
        three: "hidden",
      });
      setCircleClass({
        one: "button__circle",
        two: "button__circle--active",
        three: "button__circle",
      });
    }

    if (visibility.one == "hidden" && visibility.two == "visible") {
      setVisibility({
        one: "hidden",
        two: "hidden",
        three: "visible",
      });
      setCircleClass({
        one: "button__circle",
        two: "button__circle",
        three: "button__circle--active",
      });
    }
    if (visibility.two == "hidden" && visibility.three == "visible") {
      setVisibility({
        one: "visible",
        two: "hidden",
        three: "hidden",
      });
      setCircleClass({
        one: "button__circle--active",
        two: "button__circle",
        three: "button__circle",
      });
    }
  };

  // Function to set visibility of sections and circle colors when going to prev (to much code)
  const handlePrev = () => {
    if (visibility.three == "visible" || visibility.one == "visible") {
      setVisibility({
        one: "hidden",
        two: "visible",
        three: "hidden",
      });
      setCircleClass({
        one: "button__circle",
        two: "button__circle--active",
        three: "button__circle",
      });
    }
    if (visibility.two == "hidden" && visibility.one == "visible") {
      setVisibility({
        one: "hidden",
        two: "hidden",
        three: "visible",
      });
      setCircleClass({
        one: "button__circle",
        two: "button__circle",
        three: "button__circle--active",
      });
    }
    if (visibility.three == "hidden" && visibility.two == "visible") {
      setVisibility({
        one: "visible",
        two: "hidden",
        three: "hidden",
      });
      setCircleClass({
        one: "button__circle--active",
        two: "button__circle",
        three: "button__circle",
      });
    }
  };

  // Functions to set visibility of sections and circle colors when clicking circle (to much code)
  const handleCircleOne = () => {
    setVisibility({
      one: "visible",
      two: "hidden",
      three: "hidden",
    });
    setCircleClass({
      one: "button__circle--active",
      two: "button__circle",
      three: "button__circle",
    });
  };
  const handleCircleTwo = () => {
    setVisibility({
      one: "hidden",
      two: "visible",
      three: "hidden",
    });
    setCircleClass({
      one: "button__circle",
      two: "button__circle--active",
      three: "button__circle",
    });
  };
  const handleCircleThree = () => {
    setVisibility({
      one: "hidden",
      two: "hidden",
      three: "visible",
    });
    setCircleClass({
      one: "button__circle",
      two: "button__circle",
      three: "button__circle--active",
    });
  };
  return (
    <div className="about white-font" id="about">
      <span className="about__title accent-font creepy-font">
        <h1>About Us</h1>
      </span>
      <div className="about__container">
        <div
          className="about__slide about__slide--one"
          style={{ visibility: visibility.one }}
        >
          <h1>We are Asylum 669 </h1>
          <span>
            <h1>Server Boost Level 3</h1>
          </span>
          Like a phoenix we rise from the ashes!
          <br />
          <br />
          COMMUNITY GAMING FRIENDSHIP MOVIES GIVEAWAYS E-GIRLS NSFW CUSTOM
          EMOJIS?
          <br />
          <br />
          There should only be one thing that comes to mind when you hear those
          in succession...
        </div>

        <div
          className="about__slide about__slide--two"
          style={{ visibility: visibility.two }}
        >
          Hello, Greetings and Welcome to the Asylum 669 where all your gaming
          needs are supplemented and joys are fulfilled, in this 18+ Discord we
          hang, chill and get up to mischief as a fun, crazy coop of patients.
          <br />
          <br />
          Join us for an active gaming community where there will always be
          someone to play Overwatch with you. Do you play other games too? Bored
          and looking for a chat? Wanna watch movies with friends? Join any
          voice channel and a gorgeous e girl is guaranteed to join you!
          <br />
          <br />
          Just don't click the VSFW channel. Seriously. Don't.
        </div>
        <div
          className="about__slide about__slide--three"
          style={{ visibility: visibility.three }}
        >
          Although before you apply you must match the below checklist first:
          <ul>
            <li>18+</li>
            <li>Twisted sense of humour</li>
            <li>Loves food, like REALLY loves food</li>
            <li>Alottle of crazy</li>
            <li>Extremely weird</li>
          </ul>
          <br />
          If you ticked all of the above...
          <br />
          <br />
          So, come on in, sign yourself up and get strapped in for a mental time
          <br />
          <br />
          Apply through discord.gg/asylum669
          <br />
          <br />
          See you soon crazies
        </div>
        <div className="button__container">
          <button onClick={handlePrev} className="about__slide--button">
            {"<"}
          </button>
          <div className="circle__container">
            <div onClick={handleCircleOne} className={circleClass.one}></div>
            <div onClick={handleCircleTwo} className={circleClass.two}></div>
            <div
              onClick={handleCircleThree}
              className={circleClass.three}
            ></div>
          </div>

          <button onClick={handleNext} className="about__slide--button">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
