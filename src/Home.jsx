import React from "react";
import "./App.css";
import {
  Navbar,
  Hero,
  Services,
  Cta,
  Welcome,
  Events,
  Minblogs,
  PrimaryFooter,
  Brands,
  Gallery,
} from "./Components/Home/Components";
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
