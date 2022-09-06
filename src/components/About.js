import React from "react";
import Slider from "infinite-react-carousel";
import "./App.scss";
import "./About.scss";

const About = () => {
  return (
    <div className="about white-font" id="about">
      <span className="about__title accent-font creepy-font">
        <h1>About Us</h1>
      </span>
      <div className="about__container">
        <Slider
          slidesToShow={1}
          dots
          dotsClass="carousel-dots"
          centerMode
          wheel
          centerPadding={0}
          arrows={false}
        >
          <div className="about__slide">
            <h1>We are Asylum 669 </h1>
            <span>
              <h1>Server Boost Level 3</h1>
              <br />
            </span>
            Like a phoenix we rise from the ashes!
            <br />
            <br />
            COMMUNITY GAMING FRIENDSHIP MOVIES GIVEAWAYS E-GIRLS CUSTOM EMOJIS?
            <br />
            <br />
            There should only be one thing that comes to mind when you hear
            those in succession...
          </div>

          <div className="about__slide">
            Hello, Greetings and Welcome to the Asylum 669 where all your gaming
            needs are supplemented and joys are fulfilled, in this 18+ Discord
            we hang, chill and get up to mischief as a fun, crazy coop of
            patients.
            <br />
            <br />
            Join us for an active gaming community where there will always be
            someone to play Overwatch with you. Do you play other games too?
            Bored and looking for a chat? Wanna watch movies with friends? Join
            any voice channel and a gorgeous e girl is guaranteed to join you!
            <br />
            <br />
            Just don't click the VSFW channel. Seriously. Don't.
          </div>
          <div className="about__slide">
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
            So, come on in, sign yourself up and get strapped in for a mental
            time
            <br />
            <br />
            Apply through discord.gg/asylum669
            <br />
            <br />
            See you soon crazies
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default About;
