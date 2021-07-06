import React from "react";
import "./styles.scss";
import imgtitle from "./assets/tile.png";
import form from "./assets/form.png";

const Contact = () => (
  <section className="background-contact">
    <div className ="contact-div">
      <img className="contact-ttl-img" src={imgtitle} alt="title-contact"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        <br/>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </p>

    </div>
    <img className="contact-form" src={form} alt="form" />
  </section>
);

export default Contact;