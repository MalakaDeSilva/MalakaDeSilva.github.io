import React from "react";
import Typist from "react-text-typist";

import whitePotrait from "../assets/white-potrait.png";
import yellowPotrait from "../assets/yellow-potrait.png";

import linkedIn from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";

import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";

import { NAME, TITLES, EMAIL, CONTACT } from "../../data/about";

function About(props) {
  const image = props.theme === "light" ? yellowPotrait : whitePotrait;

  let content = (
    <div className="col-center pt-3">
      <h1>{NAME}</h1>
      <div className="mb-3">
        <Typist
          className="typist"
          sentences={TITLES}
          typingSpeed={200}
          deletingSpeed={80}
        />
      </div>
      <img src={image} alt={NAME} className="image" />
      <a href={`mailto:${EMAIL}`} className="pt-2">
        <AlternateEmailOutlinedIcon />
        &nbsp;Contact me via email
      </a>
      <p className="pl-4 pr-4 pt-3" style={{ textAlign: "center" }}>
        <a href={CONTACT.LINKEDIN}>
          <img src={linkedIn} alt="LinkedIn" className="connection-img" />
        </a>
        <a href={CONTACT.FACEBOOK}>
          <img src={facebook} alt="Facebook" className="connection-img" />
        </a>
        <a href={CONTACT.TWITTER}>
          <img src={twitter} alt="Twitter" className="connection-img" />
        </a>
        <a href={CONTACT.GITHUB}>
          <img
            src={github}
            alt="Github"
            className="connection-img"
            style={{ background: "white", borderRadius: "5px" }}
          />
        </a>
      </p>
    </div>
  );

  return content;
}

export default About;
