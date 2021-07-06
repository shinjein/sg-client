import React, { useRef, useEffect, useState } from 'react';
import "./styles.scss"
import menuData from "./data/menu-data"
import menuTitle from "./assets/menu-title.png"
import knowbtn from "./assets/more-btn.png"

const Menu = () => {
  const [scroll, setScroll] = useState();
  const [starters, setStarters] = useState([]);
  const [mainDish, setMainDish] = useState([]);
  const [sides, setSides] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const ref = useRef();

  const handleScroll = () => {
    const positionY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - positionY;
    setScroll(offset)
  };

  const getMenuData =() => {
    const data = Object.values(menuData);
    const arr = data[0].map((type) => type.items.filter((category) => category.menu))
      setStarters(arr[0])
      setMainDish(arr[1])
      setSides(arr[2])
      setDesserts(arr[3])
  }

  const createMenus = (menu, index) => {
    return(
    <div className="menu__div-list" key={index}>
      <p className="menu__p-name">{menu.name}</p>
      <p className="menu__p-describe">{menu.description}</p>
      <p className="menu__p-price">{menu.price}</p>
    </div>
    )
  }

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

return(
    <section className="background-menu">
      <div className="menu-header">
        <img className="menu-header__title" src={menuTitle} alt="menu-title"/>
        <img className="menu-header__btn" src={knowbtn} alt="know-more"/>  
      </div>
        <div className="col__grid" ref={ref}>
          <div className="col__starters" 
            style={{transform: `translateY(-${scroll}px)`}}>
            <h3 className="col__title">STARTERS</h3>
              {starters.map(createMenus)}
          </div>
          <div className="col__mains"
            style = {{transform: `translateY(${scroll}px)`}}>
            <h3 className="col__title">MAIN <br/> COURSES</h3>
              {mainDish.map(createMenus)}
          </div>
          <div className="col__sides"
            style = {{transform: `translateY(-${scroll}px)`}}>
            <h3 className="col__title">SIDES</h3>
              {sides.map(createMenus)}
          </div>
          <div className="col__desserts"
          style = {{transform: `translateY(${scroll}px)`}}>
            <h3 className="col__title">DESSERTS</h3>
              {desserts.map(createMenus)}
          </div>
        </div>
    </section>
  )
}

export default Menu;
