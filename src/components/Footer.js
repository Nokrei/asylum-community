import React from "react";
import "./Footer.scss";
import logo from "../images/Asylum_Neon.png";
import twitch from "../images/footer/twitch-link.png";
import twitter from "../images/footer/twitter-link.png";
import donate from "../images/footer/donate-link.png";
import discord from "../images/footer/discord-link.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__content--logo">
          <img src={logo} />
        </div>
        <div className="footer__content--links accent-font">
          <div className="link">
            <p className="footer-title">Follow Us</p>
            <a
              href="https://www.twitch.tv/theasylum669"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={twitch} />
            </a>
            <a
              href="https://twitter.com/Asylum669_"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={twitter} />
            </a>
          </div>
          <div className="link">
            <p className="footer-title">Support Us</p>
            <a
              href="https://www.paypal.com/paypalme/WhyYouNoGiveMoney"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={donate} />
            </a>
          </div>
          <div className="link">
            <p className="footer-title">Join Us</p>
            <a
              href="https://discord.gg/asylum669"
              target="blank"
              rel="noreferrer noopener"
            >
              <img src={discord} />
            </a>
          </div>
        </div>
        <div className="footer__content--credits white-font">
          <p className="accent-font footer-title">Credits</p>
          <p>
            Website design & development:{" "}
            <a
              style={{ color: "inherit", textDecoration: "inherit" }}
              href="https://github.com/Nokrei"
              target="blank"
              rel="noreferrer noopener"
            >
              Nokrei
            </a>{" "}
          </p>
          <p>Emojis design: Myrp, Eliza & Sirtypos</p>
          <p>
            {" "}
            Stock videos by{" "}
            <a
              style={{ color: "inherit", textDecoration: "inherit" }}
              href="http://www.videezy.com/"
              target="blank"
              rel="noreferrer noopener"
            >
              Videezy
            </a>
          </p>
        </div>
      </div>
      <div className="footer__copyright white-font">
        Copyright {new Date().getFullYear()} Asylum669
      </div>
    </footer>
  );
};

export default Footer;
