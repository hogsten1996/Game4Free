import React from "react";
import backgroundImage from "../assets/banner.jpg";
import myImage from "../assets/poe.jpg";

function Home() {
  return (
    <div className="pt-[60px] text-center">
      <section
        className="h-screen bg-center bg-cover flex flex-col justify-top"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <h1 className="text-[40px] text-yellow-500">This is Game4Free</h1>
          <h3 className="text-[30px] text-white">
            Home of the best free2play games
          </h3>
        </div>
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mx-10 h-[300px]">
          <div className="p-6 mb-6 text-gray-300 bg-white rounded-3xl shadow bg-opacity-20 flex flex-col items-center">
            <h4 className="text-3xl text-yellow-500 font-semibold mb-3">
              Daily Chat - Why Path of Exile is our favorite ARPG
            </h4>
            <p className="text-xl">
              Path of Exile is the greatest ARPG of ALL TIME!
            </p>
            <div className="flex justify-center space-x-4 my-4">
              <img
                className="h-[200px] w-[500px] rounded-3xl"
                src={myImage}
                alt="fantasy image"
              />
            </div>
            <a href="https://example.com/your-desired-url">
              <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </a>
          </div>

          <div className="p-6 mb-6 text-gray-200 bg-white rounded-3xl shadow bg-opacity-20">
            <h4 className="text-3xl text-yellow-500 font-semibold mb-3">
              Games4Free's Mission
            </h4>
            <p className="text-xl">
              "At Games4Free, we believe in the power of play without
              boundaries. Our mission is to curate and present the finest
              free-to-play (F2P) games available, ensuring every gamer has
              access to a world of immersive experiences without the weight of
              costs. We're more than just a listing; we are a testament to the
              gaming community's generosity, innovation, and shared passion.
              Dive in, explore, and let the adventures begin, all for the grand
              price of free."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
