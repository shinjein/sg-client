import React, { useRef, useEffect, useState } from 'react';
import "./menu.scss"
import menuData from "../../data/menu-data"

const Menu = () => {
  const [scroll, setScroll] = useState('');
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
    const arr = data[0].map((type, index) => type.items.filter((category) => category.menu))
      setStarters(arr[0])
      setMainDish(arr[1])
      setSides(arr[2])
      setDesserts(arr[3])
  }

  const createMenus = (menu, index) => {
    return(
    <div key={index}>
      <p className="dish-name">{menu.name}</p>
      <p className="dish-description">{menu.description}</p>
      <p className="dish-price">{menu.price}</p>
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
    <div className="column-grid" ref={ref}>
      <div className="menu-column starter-col" 
        style={{transform: `translateY(-${scroll}px)`}}>
        <h3>STARTERS</h3>
          {starters.map(createMenus)}
      </div>
      <div className="menu-column main-col"
        style = {{transform: `translateY(${scroll}px)`}}>
        <h3>MAIN</h3>
          {mainDish.map(createMenus)}
      </div>
      <div className="menu-column sides-col"
        style = {{transform: `translateY(-${scroll}px)`}}>
        <h3>SIDES</h3>
          {sides.map(createMenus)}
      </div>
      <div className="menu-column dessert-col"
      style = {{transform: `translateY(${scroll}px)`}}>
        <h3>DESSERTS</h3>
          {desserts.map(createMenus)}
      </div>
    </div>
    </section>
  )
}

export default Menu;
