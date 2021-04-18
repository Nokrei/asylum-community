import React, { useState, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";

import "./App.scss";
import "./Emojis.scss";
import coinA from "../images/emojis/CoinA.png";
import egirl from "../images/emojis/Egirl.png";
import eliza1 from "../images/emojis/Eliza1.png";
import eliza2 from "../images/emojis/Eliza2.png";
import eThot2 from "../images/emojis/EThot2.png";
import horny from "../images/emojis/Horny.png";
import idiot from "../images/emojis/Idiot.png";
import insanityBooster from "../images/emojis/Insanity Booster.png";
import noodzPing from "../images/emojis/NoodzPing.png";
import owo from "../images/emojis/OwO.png";
import queen from "../images/emojis/Queen.png";
import simp from "../images/emojis/Simp.png";
import smol from "../images/emojis/SMOL.png";
import toxic from "../images/emojis/Toxic.png";
import tuneJustRight from "../images/emojis/TuneJustRight.png";
import unamusedQ from "../images/emojis/UnamusedQ.png";
import whipping from "../images/emojis/Whipping.png";

const Emojis = () => {
  // Use the react intersection observer to determine if emojis are in the viewport.

  const [ref, inView] = useInView({
    threshold: 0,
  });

  // Assign class accordingly (animated or not).
  const [emojiClass, setEmojiClass] = useState("emoji");
  useEffect(() => {
    inView ? setEmojiClass("emoji-animated") : setEmojiClass("emoji");
  }, [inView]);
  const emojiArr = [
    coinA,
    egirl,
    eliza1,
    eliza2,
    eThot2,
    horny,
    idiot,
    insanityBooster,
    noodzPing,
    queen,
    simp,
    smol,
    toxic,
    tuneJustRight,
    unamusedQ,
    whipping,
  ];

  return (
    <div ref={ref} className="emojis">
      <div className="emojis__container">
        {emojiArr.map((emoji) => {
          return (
            <img
              style={{ animationDelay: `${emojiArr.indexOf(emoji) / 20}s` }}
              key={emoji}
              className={emojiClass}
              src={emoji}
            />
          );
        })}
      </div>
      <div
        ref={ref}
        className="emojis__title white-font"
        style={{ transitionProperty: `opacity`, opacity: inView ? 1 : 0 }}
      >
        Custom Emojis created by Rosa and SirTypos
      </div>
    </div>
  );
};

export default Emojis;
