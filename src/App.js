import React from "react";
import Header from "./pages/header/section";
import Nav from "./components/Nav/navigation"
import Community from "./pages/community/section";
import Map from "./pages/map/section";
import Menu from "./pages/menu/section";
import Contact from "./pages/contact/section";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Community />
      <Map />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
