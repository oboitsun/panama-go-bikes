import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const reviews = [
  {
    avatar: "/assets/reviews/avatar1.jpeg",
    name: "Sergey Golodyaev",
    review:
      "I talked to Mayra to book a bike tour but not only did she help with that , she gave me advice about what to do in Panamá, restaurant suggestions , she offers san Blas tours ",
  },
  {
    avatar: "/assets/reviews/avatar2.jpeg",
    name: "Sergey Golodyaev",
    review:
      "Awesome tour, great value. Mayra was extremely knowledgeable of the city and provided an fun tour for all. Highly recommended! Next time I’m in Panama will be doing it again, great way to see the city.",
  },
  {
    avatar: "/assets/reviews/avatar3.jpeg",
    name: "Sergey Golodyaev",
    review:
      "I talked to Mayra to book a bike tour but not only did she help with that , she gave me advice about what to do in Panamá, restaurant suggestions , she offers san Blas tours ",
  },
  {
    avatar: "/assets/reviews/avatar4.jpeg",
    name: "Sergey Golodyaev",
    review:
      "Alex did an excellent job showing me the cool parts of the city. Very professional and I highly recommend!",
  },
  {
    avatar: "/assets/reviews/avatar5.jpeg",
    name: "Sergey Golodyaev",
    review:
      "I talked to Mayra to book a bike tour but not only did she help with that , she gave me advice about what to do in Panamá, restaurant suggestions , she offers san Blas tours ",
  },
];
function Testimonials() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  useEffect(() => {
    const screenWidth = window && window.innerWidth;
    screenWidth && screenWidth > 1023 && setSlidesPerView(3);
  }, []);
  return (
    <div id="reviews" className="bg-lightGrey font-mont py-10 lg:py-20">
      <div className="cont relative">
        <p className="font-extrabold text-center text-2xl lg:text-[1.875rem] xl:text-[2.5rem] leading-none lg:pb-10">
          <span className="text-navy">100+</span> people love us
        </p>
        <div className="relative">
          <div
            id="prev-review"
            className="absolute top-[calc(50%-30px)] -translate-y-1/2 -translate-x-2/3  lg:-translate-x-1/4 rotate-180 cursor-pointer  z-[2] shadow-md bg-navy w-10 h-10 left-0  flex items-center justify-center"
          >
            <img src={"/assets/arrow-next.svg"} alt="next-slide" />
          </div>
          <div
            id="next-review"
            className="absolute top-[calc(50%-30px)] -translate-y-1/2 translate-x-2/3 lg:translate-x-1/4 z-[2]  cursor-pointer shadow-md bg-navy w-10 h-10 right-0  flex items-center justify-center"
          >
            <img src={"/assets/arrow-next.svg"} alt="next-slide" />
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 4500, pauseOnMouseEnter: true }}
            spaceBetween={40}
            pagination
            navigation={{ prevEl: "#prev-review", nextEl: "#next-review" }}
            centeredSlides
            slidesPerView={slidesPerView}
            loop
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white h-full p-5 w-full flex gap-5">
                  <div className="w-12 h-12 relative flex-shrink-0  ">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={r.avatar}
                      alt={r.name}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-extrabold text-sm">{r.name}</p>
                    <p className=" font-medium text-[10px] leading-relaxed text-[#888]">
                      {r.review}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
