"use client";
import React, { useEffect, useState } from "react";
import "../App.css";

const data = [
  {
    image: "/images/home/homefood.jpg", // Ensure the path is correct
  },
  {
    image: "/images/home/momo2.jpg",
  },
  {
    image: "/images/home/newari.jpg",
  },
  {
    image: "/images/home/keema.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length); // Wrap around logic
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-20">
      {/* Added padding-top to avoid overlapping */}
      <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 space-y-7 px-4 mt-20">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Delicate <span className="text-red">Flavors</span>, Delivered with
            Care.
          </h2>
          <p className="font-semibold">
            Unwrap Joy with Every Bite: Order from Our Exquisite Collection.
            Foodie Favorites Await. Dive into our Delicious Selections.
          </p>
          <button className="btn bg-red px-8 py-3 font-semibold text-white">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 w-full h-full relative">
          <div className="w-full h-96 flex justify-center items-center overflow-hidden bg-gray-200">
            <img
              src={data[currentSlide].image}
              alt="Delicious food"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
