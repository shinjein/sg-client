import React from "react";
import "./foodpost.scss"

const FirstCard = ({picture}) => {
  return(
      <div className="first-post fadeIn">
        <section className="food-card-img first-img">
          <img className="food-img" src={picture} alt="food-img"/>
        </section> 
        <section className="food-card-txt">
        <h3>@first-card</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, libero laudantium cum nobis, harum doloribus
            possimus nisi veritatis facere illum maiores ullam numquam
          </p>
      </section>
      </div>
  );
}

const SecondCard = ({picture}) => {
  return(
    <div className="second-post fadeIn">
      <section className="food-card-txt">
        <h3>@second-card</h3>
          <p>Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! 
            [📷: @foodwithmichel] #lovefood
          </p>
      </section>
      <section className="food-card-img second-img">
        <img className="food-img" src={picture} alt="food-img"/>
      </section> 
      <section className="random-text">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, libero laudantium cum nobis, harum doloribus
            possimus nisi veritatis facere illum maiores ullam numquam
        </p>
      </section>
    </div>
  )
}

const ThirdCard = ({picture}) => {
  return(
    <div className="food-card third-post fadeIn">
      <section className="food-card-txt">
        <h3>@third-card</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, libero laudantium cum nobis, harum doloribus
            possimus nisi veritatis facere illum maiores ullam numquam
          </p>
      </section>
      <section className="food-card-img second-img">
        <img className="food-img" src={picture} alt="food-img"/>
      </section> 
    </div>
  )
}


export { FirstCard, SecondCard, ThirdCard };
