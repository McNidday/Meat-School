"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { SwiperContainer, SwiperSlide } from "@/Utils/Swiper";
import Students from "./Cards/Students";
import Services from "./Cards/Services";
import Products from "./Cards/Products";
import AboutUs from "./Cards/AboutUs";

const Slides = () => {
  const searchParams = useSearchParams();
  const [hashNav, setHashNav] = useState("");

  useEffect(() => {
    setHashNav(window.location.hash);
  }, [searchParams]);

  return (
    <div
      className={`rounded-t-sm absolute h-[90%] ${
        hashNav === "" ? "top-[100%]" : "top-[10%]"
      } dark:bg-dark-secondary w-full`}
    >
      <SwiperContainer slidesPerView={1} className={`w-full h-full`}>
        <Students></Students>
        <Services></Services>
        <Products></Products>
        <AboutUs></AboutUs>
      </SwiperContainer>
    </div>
  );
};

export default Slides;
