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
        hashNav === "" || hashNav === "#" ? "" : "top-[90%]"
      } transition-all`}
    >
      <ul className="flex justify-between items-start flex-row w-full">
        <li>
          <Link
            href={"#students"}
            className={`${
              hashNav === "#students" ? "text-dark-primary" : ""
            } select-none`}
          >
            Students
          </Link>
        </li>
        <li>
          <Link
            href={"#services"}
            className={`${
              hashNav === "#services" ? "text-dark-primary" : ""
            } select-none`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={"#products"}
            className={`${
              hashNav === "#products" ? "text-dark-primary" : ""
            } select-none`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href={"#aboutus"}
            className={`${
              hashNav === "#aboutus" ? "text-dark-primary" : ""
            } select-none`}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;
