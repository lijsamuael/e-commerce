"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Card from "./card";

export default function Carousel({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {
  let myMediaQuery = window.matchMedia("(min-width: 700px)");

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 48 },
      },
      "(max-width: 600px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 48 },
      },
      "(min-width: 2000px)": {
        slides: { perView: 6, spacing: 48 },
      },
      "(min-width: 3000px)": {
        slides: { perView: "auto", spacing: 48 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div className="space-y-4  py-8">
      <h1 className="text-center text-3xl font-bold">{heading}</h1>
      <div className=" space-y-8 flex flex-col ">
        <div className="keen-slider flex justify-between" ref={sliderRef}>
          {children}
        </div>
        <div className="w-full flex justify-center">
          <button className="text-sm border-b border-black inline-block">
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
}
