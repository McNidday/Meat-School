import { SwiperSlide } from "@/Utils/Swiper";
import Image from "next/image";

const Students = () => {
  return (
    <SwiperSlide className="w-full h-full flex flex-row justify-center items-center">
      <div className="w-full h-full relative flex justify-evenly items-center">
        {["/pxfuel.jpg", "/stacey.jpg", "/becky.jpg"].map((n) => {
          return (
            <div
              key={n}
              className="w-[200px] h-[280px] bg-wh rounded overflow-hidden border-2 flex flex-col justify-between bg-black"
            >
              <div className="relative border-b-2 overflow-hidden w-[200px] h-[150px] flex justify-center items-center">
                <div className="relative w-full h-full">
                  <Image
                    src={n}
                    fill={true}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt={
                      n === "/pxfuel.jpg"
                        ? `"I am pxfuel and i love nidday's meat"`
                        : n === "/stacey.jpg"
                          ? "I know all about meat, thanks to nidday's school of meat"
                          : n === "/becky.jpg"
                            ? "I am behind him, i can confirm that what he teaches about his meat is very beneficial and practical"
                            : ""
                    }
                  ></Image>
                </div>
              </div>
              <p className="flex flex-row justify-center items-center border-b-2 p-3">
                {n === "/pxfuel.jpg"
                  ? "Name: Px Fuel"
                  : n === "/stacey.jpg"
                    ? "Name: Stacey Zosi"
                    : n === "/becky.jpg"
                      ? "Name: Becky Becky"
                      : ""}
              </p>
              <p className="text-center p-1">
                {n === "/pxfuel.jpg"
                  ? `I learned how to make meat in nidday's school, it's worth it (▀̿Ĺ̯▀̿ ̿)`
                  : n === "/stacey.jpg"
                    ? "I know all about meat, thanks to nidday's school of meat 😍"
                    : n === "/becky.jpg"
                      ? "I am behind him, his meat in a very beneficial and practical (●'◡'●)"
                      : ""}
              </p>
            </div>
          );
        })}
      </div>
    </SwiperSlide>
  );
};

export default Students;
