import React from "react";
import './header.scss';
import Text from'./assets/text.png';

const Header = () => {
  return (
    <>
    <section className="home">
      <img className="big-text" src={Text} alt="title"/>
    </section>
    </>
  );
}

export default Header;
