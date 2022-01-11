import Image from "next/image";
import React from "react";
import GetStartedButton from "./GetStartedButton";
const images = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/9.jpg",
];
function Gallery() {
  return (
    <div className=" py-10 lg:py-20 font-mont">
      <div className="cont ">
        <p className="font-extrabold text-center text-2xl lg:text-[1.875rem] xl:text-[2.5rem] leading-none pb-8 lg:pb-10">
          Gallery
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 xl:gap-12">
          {images.map((pic, i) => (
            <div
              key={i}
              className={`w-full  relative pb-[100%] ${
                i === images.length - 1 ? "hidden lg:block" : ""
              }`}
            >
              <div className="absolute w-full h-full top-0 left-0 transition-transform hover:scale-110 cursor-pointer">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={pic}
                  alt="galley item"
                />{" "}
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full">
          <GetStartedButton addClass={"flex items-center gap-2 mt-8 mx-auto"}>
            <img
              className=""
              src="/assets/make-call.svg"
              alt="make an appointment"
            />
            <span className=" ">Make appointment</span>
          </GetStartedButton>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
