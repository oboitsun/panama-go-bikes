import Image from "next/image";
import React from "react";
import Link from "react-scroll/modules/components/Link";
import Burger from "./Burger.js";
import GetStartedButton from "./GetStartedButton.js";
const anchors = [
  { id: "about", label: "About us" },
  { id: "reviews", label: "Reviews" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact us" },
];
function Header() {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
  };
  return (
    <div className="py-7 text-navy bg-white shadow-xl font-mont relative z-10">
      <div className="cont  flex items-center justify-between">
        <div className=" w-20 lg:w-24 xl:w-[120px]">
          <Image
            layout="intrinsic"
            width={120}
            height={64}
            src={"/assets/logo.png"}
            alt="Panama Bike Tours Logo"
          />
        </div>
        <Burger />
        <div className="hidden lg:flex items-center lg:gap-8 xl:gap-12 text-sm lg:text-base">
          {anchors.map((a, i) => (
            <Link
              key={i}
              to={a.id}
              className="text-grey font-bold font-mont"
              {...linkProps}
            >
              {a.label}
            </Link>
          ))}
          <GetStartedButton> get started</GetStartedButton>
          <a className="font-bold underline" href="tel:+507 6905 2819">
            +507 6905 2819
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
