"use client";
import React, { useState, useEffect } from "react";

interface Slide {
  imageUrl: string;
  content: React.ReactNode; // React Node can be a combination of icons and text
}

interface SliderProps {
  slides?: Slide[]; // Array of objects containing image URLs and content (optional)
}

const defaultSlides: Slide[] = [
  {
    imageUrl: "/HomeIcons/slider/code4.jpg",
    content: (
      <div className="morphismEffect h-[75px] w-1/2 rounded-[16px] max-sm:h-[50px] max-sm:w-[95%]"></div>
    ),
  },
  {
    imageUrl: "/HomeIcons/slider/code5.jpg",
    content: (
      <div className="morphismEffect h-[75px] w-1/2 rounded-[16px] max-sm:h-[50px] max-sm:w-[95%]"></div>
    ),
  },
  {
    imageUrl: "/HomeIcons/slider/code3.jpg",
    content: (
      <div className="morphismEffect h-[75px] w-1/2 rounded-[16px] max-sm:h-[50px] max-sm:w-[95%]"></div>
    ),
  },
];

const Slider: React.FC<SliderProps> = ({ slides = defaultSlides }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 5000);

    return () => clearInterval(interval);
  });

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? slides.length - 1 : prevPage - 1
    );
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === slides.length - 1 ? 0 : prevPage + 1
    );
  };

  return (
    <div className="relative w-full">
      <div
        className="slider h-[500px] w-full rounded-[33px]  p-6 max-md:h-[350px] max-sm:h-[200px]"
        style={{ backgroundImage: `url(${slides[currentPage].imageUrl})` }}
      >
        <div className=" flex size-full items-end max-md:justify-center">
          {slides[currentPage].content}
        </div>
        <button
          className="prev rounded-full px-5 py-2 max-sm:px-4 max-sm:text-[1rem]"
          onClick={prevPage}
        >
          &#10094;
        </button>
        <button
          className="next rounded-full px-5 py-2 max-sm:px-4 max-sm:text-[1rem]"
          onClick={nextPage}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
