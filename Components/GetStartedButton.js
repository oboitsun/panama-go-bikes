import React from "react";

function GetStartedButton({ children, addClass }) {
  return (
    <button
      className={`py-3 px-5 bg-navy font-extrabold uppercase text-white font-mont ${addClass}`}
    >
      {children}
    </button>
  );
}

export default GetStartedButton;
