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
import eliza from "../images/eliza.png";
import nefarius from "../images/nefarius.png";
import twinkle from "../images/twinkle.png";
const Staff = () => {
  // Get values for translate on scroll animation from global state (MainScreen)
  const [globalState, setGlobalState] = useContext(AppContext);
  
  const offset = 0.3;
  return (
    <div className="staff-container" id='staff'>
      <StaffCard
        style={{
          transform: `translateX(${globalState.scrollPosition * -offset}px)`,
        }}
        img={eliza}
        class="staff-card__image"
        title="Eliza"
        desc="Ello Gamers, You have come to the right place! I am Eliza, 
        I am the owner of this madness and nothing happens here without my knowledge. 
        Gaming alone sucks, so don't do it alone silly, come on in!"
      />{" "}
      <StaffCard
        style={{
          transform: `translate(${globalState.scrollPosition * offset}px)`,
          flexDirection: "row-reverse",
        }}
        img={nefarius}
        class="staff-card__image"
        title="Nefarius"
        desc="It is I, Nefarius, the Avatar of the Asylum, maintainer of balance, 
        hoarder of booze, narcotics and camel milk, tech support, quencher of revolts, 
        arbiter of corruption-fuelled justice, possessor of several Ph.D.s in Nothing, 
        life coach if things are going too well and last but not least your average guy 
        who never should have been given any power or authority over more than himself 
        so naturally a perfect fit for 2nd in charge..."
      />
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
          flexDirection: "row-reverse",
        }}
        img={nonToxic}
        class="staff-card__image"
        title="NonToxic"
        desc="A Smart person knows that a Tomato is a Fruit, but a wise person knows not to add into a fruit Salad. 
        I am known as NonToxic, I am Married for almost 15 years, I have 2 Children and I am a Gamer for Life.
         I Suffer from that disorder where I speak the truth and it pisses people off. If I have said something to offend you, please tell me. I may want to use it again.
        I will leave you with this wisdom: Before you ask why someones dislikes you, ask yourself why do you give a fuck?"
      />
      <StaffCard
        style={{
          transform: `translate(${globalState.scrollPosition * -offset}px)`,
        }}
        img={four1}
        img2={four2}
        class="staff-card__image--animated"
        class2="staff-card__image2--animated"
        title="FoursAreLife"
        desc="Hey, mane name is Fours or more commonly DAV / Dave, im an IT - Student from 
        Austria and spend way too much thime on the Internet and playing Destiny. My job is 
        mostly recruiting and hosting Server-events.
        "
      />
      <StaffCard
        style={{
          transform: `translate(${globalState.scrollPosition * offset}px)`,
          flexDirection: "row-reverse",
        }}
        img={typos}
        class="staff-card__image"
        title="SirTypos"
        desc="Hello there,
        I'm Sirtypos here with the mods to assist, I make emojis, some are questionable, 
        turned into a life coach, hope no lives ruined in the process, and having an interesting experience!
        so come on in, meet new friends & get comfy!"
      />
      <StaffCard
        style={{
          transform: `translate(${globalState.scrollPosition * -offset}px)`,
        }}
        img={twinkle}
        class="staff-card__image"
        title="Twinkle"
        desc="Hey I'm Twinkle (Twonkle,Twonk, Twink, horni British mod or whatever you want to call me). I'm 19. I've not been in the community long. I'm mainly responsible for recruiting and saying 'That's kinda hot'"
      />
    </div>
  );
};

export default Staff;
