import { useState, useEffect } from "react";
import { Routes, Route } from 'react-dom';
import PopCorn from './assets/popcorn.svg'
function App() {
  return (
    <>
      <div className="bg-gray-900 h-screen">
        <img src={PopCorn} alt="logo" className="mx-auto" />
        <h1 className={`text-white text-4xl text-center`}>BingeWatch</h1>
      </div>
    </>
  );
}
export default App;
