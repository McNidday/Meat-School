"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const HomeNav = () => {
  const searchParams = useSearchParams();
  const [hashNav, setHashNav] = useState("");

  useEffect(() => {
    setHashNav(window.location.hash);
  }, [searchParams]);

  return (
    <nav
      className={`absolute flex justify-center items-center w-3/4 h-[10%] ${
        hashNav === "" ? "" : "top-0"
      }`}
    >
      <ul className="flex justify-between items-start flex-row w-full">
        <li>
          <Link href={"#students"}>Students</Link>
        </li>
        <li>
          <Link href={"#services"}>Services</Link>
        </li>
        <li>
          <Link href={"#products"}>Products</Link>
        </li>
        <li>
          <Link href={"#aboutus"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;
