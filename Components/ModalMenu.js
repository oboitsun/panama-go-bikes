import React from "react";
import Link from "react-scroll/modules/components/Link";

import GetStartedButton from "./GetStartedButton.js";
const anchors = [
  { id: "about", label: "About us" },
  { id: "reviews", label: "Reviews" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact us" },
];
function ModalMenu({ showMenu, setShowMenu }) {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
  };
  return (
    <div
      className={`fixed top-0 left-0 z-10 w-screen h-screen overflow-hidden transition-all bg-white ${
        showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="pt-40 flex flex-col gap-5 items-center ">
        {anchors.map((a, i) => (
          <Link
            onClick={() => {
              setShowMenu(false);
            }}
            key={i}
            to={a.id}
            className="text-navy font-bold font-mont"
            {...linkProps}
          >
            {a.label}
          </Link>
        ))}
        <GetStartedButton> get started</GetStartedButton>
        <a className="font-bold underline text-navy" href="tel:+507 6905 2819">
          +507 6905 2819
        </a>
      </div>
    </div>
  );
}

export default ModalMenu;
