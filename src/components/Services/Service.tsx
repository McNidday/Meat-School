import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  alt: string;
  description: string;
  heading: string;
}

const Service = ({ image, alt, description, heading }: Props) => {
  return (
    <Link href={""}>
      <div className="overflow-hidden w-80 h-[100px] border-2 border-white flex justify-between items-center bg-black">
        <div className="overflow-hidden w-[150px] h-[100px] relative flex justify-center items-center">
          <Image
            src={image}
            fill={true}
            alt={alt}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="p-1 flex justify-between flex-col h-full">
          <h4 className="border-b font-bold">{heading}</h4>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Service;
