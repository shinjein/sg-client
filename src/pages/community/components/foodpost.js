import React from "react";
import "./styles.scss"
import ig from "../assets/instagram-btn.png"

const FirstCard = ({picture}) => {
  return(
      <div className="post__first fadeIn">
        <section className="card__img first-img">
          <img className="ig-png" src={ig} alt="ig-img"/>
          <img className="food-png" src={picture} alt="food-img"/>
        </section> 
        <section className="card__txt">
          <h3>@buzzfeedfood</h3>
            <p>It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars 
              and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto
            </p>
        </section>
      </div>
  );
}

const SecondCard = ({picture}) => {
  return(
    <div className="post__second fadeIn">
      <div className="card__custom">
        <section className="card__txt">
          <h3>@love_food</h3>
            <p>Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! 
              [📷: @foodwithmichel] #lovefood</p>
        </section>
        <section className="card__img">
          <img className="ig-png" src={ig} alt="ig-img"/>
          <img className="food-png" src={picture} alt="food-img"/>
        </section> 
      </div>
      <article className="random-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis, libero laudantium cum nobis, harum doloribus
        possimus nisi veritatis facere illum maiores ullam numquam
      </article>
    </div>
  )
}

const ThirdCard = ({picture}) => {
  return(
    <div className="post__third fadeIn">
      <article className="random-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis, libero laudantium cum nobis, harum doloribus
          possimus nisi veritatis facere illum maiores ullam numquam
      </article>
      <div className="card__custom">
      <section className="card__txt">
        <h3>@buzzfeedfood</h3>
          <p>Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)</p>
      </section>
      <section className="card__img">
        <img className="ig-png" src={ig} alt="ig-img"/>
        <img className="food-png" src={picture} alt="food-img"/>
      </section> 
      </div>

    </div>
  )
}


export { FirstCard, SecondCard, ThirdCard };
