import React from "react";

function GetStartedButton({ children, addClass, btnStyle = "filled" }) {
  const style = {
    filled: "bg-navy",
    outlined: "border-2 border-white",
  };
  return (
    <button
      className={`py-3 px-5 ${style[btnStyle]} font-extrabold uppercase text-white font-mont ${addClass} hover:scale-105 transition-all`}
    >
      {children}
    </button>
  );
}

export default GetStartedButton;
