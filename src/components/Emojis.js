import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
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
  // Global state to catch scroll position
  const [globalState, setGlobalState] = useContext(AppContext);
  const [emojiClass, setEmojiClass] = useState("emoji");
  useEffect(() => {
    globalState.scrollPosition < 100
      ? setEmojiClass("emoji-animated")
      : setEmojiClass("emoji");
  }, [globalState.scrollPosition]);
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
    <div className="emojis">
      <div className="emojis__container">
        {emojiArr.map((emoji) => {
          return (
            <img
              style={{ animationDelay: `${emojiArr.indexOf(emoji) / 20}s` }}
              className={emojiClass}
              src={emoji}
            />
          );
        })}
      </div>
      <div className="emojis__title white-font">
        Custom Emojis created by Rosa and SirTypos
      </div>
    </div>
  );
};

export default Emojis;
