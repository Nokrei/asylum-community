import React from "react";
import "./App.scss";
import "./Staff.scss";
import StaffCard from "./StaffCard";
import eliza from "../images/eliza.png";
import grace1 from "../images/grace1.jpg";
import grace2 from "../images/grace2.jpg";
import myrp from "../images/myrp-pic.png";

// Component not in use, keeping it just in case so that I don't have to remake it if needed again.
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
      />
      <StaffCard
        cardClass="staff-card"
        direction={right}
        flex="row-reverse"
        img={grace2}
        img2={grace1}
        alt="Grace2"
        alt2="Grace"
        border2={{ display: "none" }}
        class="staff-card__image--animated"
        class2="staff-card__image3--animated"
        title="GraceTheGreat1"
        role="@The Disease"
        tags={{ justifySelf: "left" }}
        desc="Hi, I'm Grace! I like games. I'm an American who moved to Norway for love, but I found my true love in Dubai and within this community. Now I run this shit with my soulmate. Join us and bask in our glory!"
      />
      <StaffCard
        cardClass="staff-card__blue"
        direction={left}
        img={myrp}
        alt="Myrp"
        border1={{ borderColor: "#9fb5db" }}
        class="staff-card__image"
        title="Myrp"
        role="@Warden"
        border2={{ display: "none" }}
        titleColor={{ color: "#9fb5db" }}
        desc="Heya! My name is Myrp, that one ginger on staff. I’m from the Netherlands born and raised! As one of the Wardens I like to be social and just hang around or play a few games, feel free to join whenever!"
      />
    </div>
  );
};

export default Staff;
