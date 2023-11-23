"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const X = () => {
  const searchParams = useSearchParams();
  const [hashNav, setHashNav] = useState("");

  useEffect(() => {
    setHashNav(window.location.hash);
  }, [searchParams]);

  return (
    <Link href={"#"}>
      <div
        className={`w-fit h-fit absolute top-[91%] left-[1%] cursor-pointer bg-dark-primary rounded overflow-hidden ${
          hashNav === "" || hashNav === "#" ? "opacity-0" : "opacity-100"
        } transition-all z-40`}
      >
        <Image src={"/x.svg"} alt="X icon" width={50} height={50}></Image>
      </div>
    </Link>
  );
};

export default X;
