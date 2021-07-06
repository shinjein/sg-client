import React from "react";
import "./styles.scss";
import img from "./assets/text.png";
import logo from "./assets/stamp.png";

const Header = () => {
  return (
    <section className="home">
      <img className="stamp rotate" src={logo} alt="logo"/>
      <img className="big-text" src={img} alt="title"/>
    </section>
  );
}

export default Header;
