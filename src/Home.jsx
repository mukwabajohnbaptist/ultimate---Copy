import React from "react";
import "./App.css";
import Navbar from "./Components/Home/Navbar";
import Hero from "./Components/Home/Hero";
import Services from "./Components/Home/Services";
import Cta from "./Components/Home/Cta";
import Welcome from "./Components/Home/Welcome";
import Events from "./Components/Home/Events";
import Minblogs from "./Components/Home/Minblogs";
import PrimaryFooter from "./Components/Home/PrimaryFooter";
import Brands from "./Components/Home/Brands";
import Gallery from "./Components/Home/Gallery";

import { hero } from "./data/data.js";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero hero={hero} />
      <Services />
      <Cta />
      <Events />
      <Welcome />
      <Minblogs />
      <Gallery />
      <Brands />
      <PrimaryFooter />
    </div>
  );
}

export default Home;
