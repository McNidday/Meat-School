"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SwiperContainer } from "@/Utils/Swiper";
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
        hashNav === "" || hashNav === "#" ? "top-[100%]" : "top-[0%]"
      } dark:bg-dark-secondary w-full transition-all`}
    >
      <SwiperContainer
        slidesPerView={1}
        allowTouchMove={false}
        className={`w-full h-full`}
      >
        <Students></Students>
        <Services></Services>
        <Products></Products>
        <AboutUs></AboutUs>
      </SwiperContainer>
    </div>
  );
};

export default Slides;
