import { SwiperSlide } from "@/Utils/Swiper";

const AboutUs = () => {
  return (
    <SwiperSlide>
      <div className="flex justify-center items-center h-full w-full">
        <p className="bg-dark-primary p-5 rounded">
          Our mission here at <em>{`NIDDAY'S MEAT SCHOOL`}</em> is to teach you
          how to cook meat! <em>THE RIGHT WAY!</em> {`( •_•)>⌐■-■`}
        </p>
      </div>
    </SwiperSlide>
  );
};

export default AboutUs;
