import React from "react";
import "../../index.css";
import headerPicture from "../../img/postenbring.jpeg";
import { Link } from "react-router-dom";

console.log(headerPicture);

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${headerPicture})`,
  };

  return (
    <>
      <div style={backgroundImageStyle} className="px-8 py-32 bg-cover">
        <div className="flex flex-col items-center justify-center py-32 ">
          <h1 className="text-5xl font-bold text-white">Welcome</h1>
          <div className=" py-11">
            <button className="text-2xl font-semibold items-center justify-center bg-red-500 border-none mt-5 cursor-pointer rounded-lg text-white py-1 px-10">
              <Link to="/login" className=" hover:text-red-400 duration-500">
                Login to view more
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
