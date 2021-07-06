import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles.scss";
import { FirstCard, SecondCard, ThirdCard } from "./components/foodpost"
import title from "./assets/title.png"
import subtitle from "./assets/subtitle.png"
import titlebtn from "../../pages/menu/assets/more-btn.png"
import img01 from "./assets/pic01.png"
import img02 from "./assets/pic02.png"
import img03 from "./assets/pic03.png"


const Community = () => {

  AOS.init({
    duration: 1000,
  easing: 'ease-in-out-back'
  });

  return (
    <div className="community__layout">
      <section className="community__header">
        <img className="community__title" src={title} alt="pg2-heading"/>
        <img className="community__btn" src={titlebtn} alt="btn" />
        <img className="community__sub" src={subtitle} alt="sub" />
      </section>
      <div data-aos="fade-up" className="posts__page">
        <FirstCard className="fadeIn" picture={img01}/>
      </div>
      <div data-aos="fade-up">
        <SecondCard className="fadeIn" picture={img02}/>
      </div>
      <div data-aos="fade-up">
        <ThirdCard className="fadeIn" picture={img03}/>
      </div>
    </div>
  );
}

export default Community;
