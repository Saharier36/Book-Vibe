import React from "react";
import bannerImg from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[80vh] rounded-2xl my-8 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-6">
            <h1 className="text-6xl font-bold font-playfair leading-snug">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn bg-green-500 hover:bg-green-700 text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
