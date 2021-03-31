import React from "react";
import "./App.scss";
import './Emojis.scss'
import coinA from "../images/emojis/CoinA.png";
import egirl from "../images/emojis/Egirl.png";
import egirl2 from "../images/emojis/Egirl2.png";
import eThot from "../images/emojis/EThot.png";
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
  const emojiArr = [
    coinA,
    egirl,
    egirl2,
    eThot,
    eThot2,
    horny,
    idiot,
    insanityBooster,
    noodzPing,
    owo,
    queen,
    simp,
    smol,
    toxic,
    tuneJustRight,
    unamusedQ,
    whipping,
  ];

  return (
    <div className='emojis'>
      {emojiArr.map((emoji) => {
       return <img className='emoji' src={emoji} />;
      })}
    </div>
  );
};

export default Emojis;
