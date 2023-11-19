import Footer from "@/components/Footer/Footer";
import HomeNav from "@/components/Navigation/HomeNav";
import Slides from "@/components/Slides/Slides";
import { useEffect } from "react";
import type { SwiperSlideProps, SwiperProps } from "swiper/react";
// import Youtube from "react-youtube";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}

export default function Home() {
  return (
    <>
      <main className="relative flex justify-center items-center overflow-hidden">
        <HomeNav></HomeNav>
        {/* <Youtube videoId=""></Youtube> */}
        <Slides></Slides>
      </main>
      <Footer></Footer>
    </>
  );
}
