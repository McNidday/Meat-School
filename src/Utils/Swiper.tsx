import { useEffect, useRef } from "react";
import type { SwiperSlideProps, SwiperProps } from "swiper/react";
import { register } from "swiper/element/bundle";

export function SwiperContainer(props: SwiperProps) {
  const swiperRef = useRef<any>(null);
  const { children, ...rest } = props;

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
  }, []);

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
