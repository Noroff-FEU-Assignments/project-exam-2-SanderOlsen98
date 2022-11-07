import React from "react";
import "../../../index.css";
import HeaderPicture from "../../../img/posten-barcode.jpg";

console.log(HeaderPicture);

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={HeaderPicture} alt="header" className=" h-60" />
        <h1 className="text-5xl font-bold">Home</h1>
        <p className="text-2xl font-semibold">Welcome to the home page</p>
      </div>
    </>
  );
}

export default Home;
