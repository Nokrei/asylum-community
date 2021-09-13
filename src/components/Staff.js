import React from "react";
import "./App.scss";
import "./Staff.scss";
import StaffCard from "./StaffCard";
import grace1 from "../images/grace1.jpg";
import grace2 from "../images/grace2.jpg";
import four1 from "../images/four1.jpg";
import four2 from "../images/four2.jpg";
import nonToxic from "../images/nonToxic.jpg";
import eliza from "../images/eliza.jpg";
import nefarius from "../images/nefarius.jpg";
import twinkle from "../images/twinkle.jpg";
const Staff = () => {
  // left and right pass values to translateX in StaffCard
  const left = "-100%";
  const right = "100%";

  return (
    <div className="staff-container" id="staff">
      <span className="staff-title blue-font creepy-font">
        <h1>Staff</h1>
      </span>
      <br />
      <br />
      <StaffCard
        cardClass="staff-card"
        direction={left}
        img={eliza}
        alt="Eliza"
        class="staff-card__image"
        title="Eliza"
        role="@The Disease"
        tag="Eliza#0069"
        desc="Ello Gamers, You have come to the right place! I am Eliza, 
        I am the owner of this madness and nothing happens here without my knowledge. 
        Gaming alone sucks, so don't do it alone silly, come on in!"
      />{" "}
      <StaffCard
        cardClass="staff-card__blue"
        direction={right}
        flex="row-reverse"
        img={nefarius}
        alt="Nefarius"
        border1={{ borderColor: "#9fb5db" }}
        border2={{ display: "none" }}
        class="staff-card__image"
        title="Nefarius"
        role="@Warden"
        tags={{ justifySelf: "left" }}
        titleColor={{ color: "#9fb5db" }}
        desc="It is I, Nefarius, the Avatar of the Asylum, maintainer of balance, 
        hoarder of booze, narcotics and camel milk, tech support, quencher of revolts, 
        arbiter of corruption-fuelled justice, possessor of several Ph.D.s in Nothing, 
        life coach if things are going too well and last but not least your average guy 
        who never should have been given any power or authority over more than himself 
        so naturally a perfect fit for 2nd in charge."
      />
      <StaffCard
        cardClass="staff-card"
        direction={left}
        img={grace2}
        img2={grace1}
        alt="Grace2"
        alt2="Grace"
        border2={{ display: "none" }}
        class="staff-card__image--animated"
        class2="staff-card__image2--animated"
        title="GraceTheGreat1"
        role="@Warden"
        desc="Hi, I'm Grace! I like games. I'm an American who moved to Norway for love. 
        You can find me playing Overwatch, working out, or just chilling with the server.
         My main job on Asylum 669 is coordinating game nights along with Feral and Dave. 
         JOIN US. Subscribe to my OnlyChairs."
      />
    </div>
  );
};

export default Staff;
