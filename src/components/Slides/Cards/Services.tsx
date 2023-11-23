import { SwiperSlide } from "@/Utils/Swiper";
import Service from "@/components/Services/Service";

const Services = () => {
  return (
    <SwiperSlide>
      <div className="flex flex-row w-full h-full justify-evenly items-center">
        <div className="w-[67%] h-[95%] bg-dark-primary rounded p-3 flex flex-wrap flex-row justify-between">
          <Service
            heading="Grilled Steak"
            description="Learn how to cook a grilled steak on a table"
            image="/grilled-steak-table.jpg"
            alt="grilled-steak-table"
          ></Service>
          <Service
            heading="Fork steak"
            description="Learn how to cook a front view delicious food on a fork steak"
            image="/front-view-delicious-food-fork.jpg"
            alt="front-view-delicious-food-fork"
          ></Service>
          <Service
            heading="Fillet steak"
            description="Juicy grilled fillet steak with green beans on your finger tips"
            image="/juicy-grilled-pork-fillet-steak-with-green-beans.jpg"
            alt="juicy-grilled-pork-fillet-steak-with-green-beans"
          ></Service>
          <Service
            heading="Grilled Steak"
            description="Learn how to cook a grilled steak on a table"
            image="/grilled-steak-table.jpg"
            alt="grilled-steak-table"
          ></Service>
          <Service
            heading="Fork steak"
            description="Learn how to cook a front view delicious food on a fork steak"
            image="/front-view-delicious-food-fork.jpg"
            alt="front-view-delicious-food-fork"
          ></Service>
          <Service
            heading="Fillet steak"
            description="Juicy grilled fillet steak with green beans on your finger tips"
            image="/juicy-grilled-pork-fillet-steak-with-green-beans.jpg"
            alt="juicy-grilled-pork-fillet-steak-with-green-beans"
          ></Service>
          <Service
            heading="Ribeye steak"
            description="Rare ribeye steak, Juicy as hell, Learn about that rib eye 👀"
            image="/rare ribeye steak.png"
            alt="rare ribeye steak"
          ></Service>
          <Service
            heading="Grilled Steak"
            description="Learn how to cook a grilled steak on a table"
            image="/grilled-steak-table.jpg"
            alt="grilled-steak-table"
          ></Service>
          <Service
            heading="Ribeye steak"
            description="Rare ribeye steak, Juicy as hell, Learn about that rib eye 👀"
            image="/rare ribeye steak.png"
            alt="rare ribeye steak"
          ></Service>
        </div>
        <div className="h-[95%] w-[30%] bg-dark-primary rounded">
          <form className="flex flex-col items-center">
            <input
              placeholder="UserName"
              className="w-[90%] my-4 p-4 rounded"
            ></input>
            <p>OR</p>
            <input
              placeholder="Email"
              className="w-[90%] my-4 p-4 rounded"
            ></input>
            <input
              placeholder="Password"
              className="w-[90%] my-4 p-4 rounded"
            ></input>
            <button className="rounded w-28 h-8 bg-black my-0">Login</button>
            <p className="w-[90%] p-0 my-2 text-center">{`You don't have a Nidday's meat land account, Don't worry ヾ(⌐■_■)ノ♪, Click below to sign up`}</p>
            <button className="rounded w-28 h-8 bg-black my-0">Sign Up</button>
          </form>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Services;
