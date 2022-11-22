import React from "react";
import "../../../index.css";
import headerPicture from "../../../img/post-og-bring-bud.jpeg";

console.log(headerPicture);

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold">Home</h1>
        <p className="text-2xl font-semibold">Welcome to the home page</p>
      </div>
    </>
  );
}

export default Home;
