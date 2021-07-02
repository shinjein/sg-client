import React from "react";
import './App.scss';
import Header from "./pages/header/section";
import Nav from "./components/navigation";
import Community from "./pages/community/section";
import Map from "./pages/map/section";
import Menu from "./pages/menu/section";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Community />
      <Map />
      <Menu />
    </div>
  );
}

export default App;
