import React, { useEffect, useState, useContext } from "react";
import AppContext from "./AppContext";
import { useSpring } from "react-spring";
import StaffCard from "./StaffCard";
import grace1 from "../images/grace1.png";
import grace2 from "../images/grace2.png";
import four1 from "../images/four1.png";
import four2 from "../images/four2.png";
import nonToxic from "../images/nonToxic.png";
import typos from "../images/typos.png";
const Staff = () => {
  const [globalState, setGlobalState] = useContext(AppContext);
  console.log(globalState.scrollPosition);
  const offset = 0.5;
  return (
    <div className="staff-container">
      <StaffCard
        style={{
          transform: `translate(${globalState.scrollPosition * -offset}px)`,
        }}
        img={grace2}
        img2={grace1}
        class="staff-card__image--animated"
        class2="staff-card__image2--animated"
        title="GraceTheGreat1"
        desc="Hi, I'm Grace! I like games. I'm an American who moved to Norway for love. 
        You can find me playing Overwatch, working out, or just chilling with the server.
         My main job on Asylum 669 is coordinating game nights along with Feral and Dave. 
         JOIN US. Subscribe to my OnlyChairs."
      />
      <StaffCard
        style={{
          transform: `translate(${globalState.scrollPosition * offset}px)`,
        }}
        img={nonToxic}
        class="staff-card__image"
       
        title="NonToxic"
        desc="A Smart person knows that a Tomato is a Fruit, but a wise person knows not to add into a fruit Salad. 
        I am known as NonToxic, I am Married for almost 15 years, I have 2 Children and I am a Gamer for Life.
        I have been admitted as a Patient to the Asylum a while ago now, and have been here as a Psychopath for quite a while. I Suffer from that disorder where I speak the truth and it pisses people off. If I have said something to offend you, please tell me. I may want to use it again.
        I will leave you with this wisdom: Before you ask why someones dislikes you, ask yourself why do you give a fuck?"
      />
      <StaffCard
        style={{
          transform: `translate(${globalState.scrollPosition * -offset}px)`,
          gridAutoFlow: "dense",
        }}
        img={four1}
        img2={four2}
        class="staff-card__image--animated"
        class2="staff-card__image2--animated"
        title="DAV"
        desc="Hey, mane name is Fours or more commonly DAV/Dave, im an IT-Student from 
        Austria and spend way too much thime on the Internet and playing Destiny. My job is 
        mostly recruiting and hosting Server-events."
      />

      <StaffCard
        style={{
          transform: `translate(${globalState.scrollPosition * offset}px)`,
        }}
        img={typos}
        class="staff-card__image"
        title="SirTypos"
        desc="Hello there,
        I'm Sirtypos here with the mods to assist, I make emojis, some are questionable, 
        turned into a life coach, hope no lives ruined in the process, and having an interesting experience!
        so come on in, meet new friends & get comfy!"
      />
    </div>
  );
};

export default Staff;
