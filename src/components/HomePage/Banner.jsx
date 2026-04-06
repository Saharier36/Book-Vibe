import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[80vh] rounded-2xl container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
          <img src={bannerImg} />
          <div className="space-y-6">
            <h1 className="text-6xl font-bold font-playfair leading-snug">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn bg-green-500 hover:bg-green-600 text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
