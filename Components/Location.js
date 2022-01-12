import Image from "next/image";
import React from "react";

function Location() {
  return (
    <div
      id="contact"
      className="relative py-10 lg:py-[110px] xl:pt-[130px] font-mont overflow-hidden ax-w-screen-2xl mx-auto"
    >
      <div className="absolute w-[110%] h-full left-0 top-0">
        <Image
          // className="absolute w-full h-full left-1/2 top-1/2 object-cover -translate-x-1/2 -translate-y-1/2"
          layout="fill"
          objectFit="cover"
          src={"/assets/map.jpeg"}
        />
      </div>
      <div className="cont">
        <div className="bg-white shadow-md p-5 xl:p-8 relative z-[2] grid gap-4 xl:gap-6 lg:max-w-[50%] ">
          <div className="hidden lg:block absolute right-0 w-10 h-10 rotate-[45deg] top-1/2 -translate-y-1/2 translate-x-1/2 bg-white"></div>
          <p className="font-black text-2xl xl:text-[32px]">
            We are here:
            <br />
            <span className="text-navy">Avenida Balboa, Panama</span>
          </p>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center text-sm xl:text-base bg-lightGrey p-5 xl:py-6">
            <p className="font-medium">Business Hours</p>
            <p className="font-extrabold xl:text-[20px]">
              Mon-Sun: Open 24 hours
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center text-sm xl:text-base bg-lightGrey p-5 xl:py-6">
            <p className="font-medium">Phone:</p>
            <p className="font-extrabold xl:text-[20px]">+507 6905 2819</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
