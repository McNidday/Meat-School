import { useEffect, useRef, useState } from "react";
import type { SwiperSlideProps, SwiperProps } from "swiper/react";
import { register } from "swiper/element/bundle";
import { useSearchParams } from "next/navigation";

export function SwiperContainer(props: SwiperProps) {
  const swiperRef = useRef<any>(null);
  const { children, ...rest } = props;
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!swiperRef.current) return;
    if (swiperRef.current.swiper && swiperRef.current.swiper.initialized) {
      switch (window.location.hash) {
        case "#students":
          swiperRef.current.swiper.slideTo(0);
          break;
        case "#services":
          swiperRef.current.swiper.slideTo(1);
          break;
        case "#products":
          swiperRef.current.swiper.slideTo(2);
          break;
        case "#aboutus":
          swiperRef.current.swiper.slideTo(3);
          break;
      }
    }
  }, [searchParams]);

  useEffect(() => {
    // Register Swiper web component
    register();
    // pass component props to parameters
    const params = {
      ...rest,
    };

    if (swiperRef.current) {
      // Assign it to swiper element
      Object.assign(swiperRef.current, params);
      // initialize swiper
      swiperRef.current.initialize();
    }
  }, [rest]);

  return (
    <swiper-container init={false} ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

export function SwiperSlide(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
    HTMLElement
  >
) {
  const { children, ...rest } = props;
  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
