import React from "react";
// import PopCorn from "../assets/images/popcorn.svg";
import NavBar from "../components/NavBar";
import BingeHeader from "../components/BingeHeader";
import {Sliders} from "../components/Sliders";
import CategoryBar from "../components/CategoryBar";
import Button from "../components/Button";



function Home() {
  return (
    <div className="bg-dark-navy">
      <NavBar />
      <BingeHeader />
      <CategoryBar /> {/* Arranger la MaxWidth pour éviter le débordement sur la gauche de la page*/}
      <Sliders />
      <Sliders />
      <Sliders />
      <h1 className={`text-white text-4xl text-center`}>BingeWatch</h1>
    </div>
  );
}
export default Home;
