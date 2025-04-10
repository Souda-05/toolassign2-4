import { delay } from "framer-motion";
import { div, s, text } from "framer-motion/client";
import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Miss.X",
    text: "a dedicated and passionate educator with over 8 years of experience in the field of computer science and web development. He holds a Master’s degree in Computer Applications and is a certified ReactJS and Front-End Development instructor. His interactive teaching style and deep subject knowledge help students build real-world skills effectively.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIMobhYWeEI337ODNBN28o7OBDYXNoPmflT-3ILqZEvCFTO7DIdGmXbA&s",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Miss.Y",
    text: "a dedicated and passionate educator with over 8 years of experience in the field of computer science and web development. He holds a Master’s degree in Computer Applications and is a certified ReactJS and Front-End Development instructor. His interactive teaching style and deep subject knowledge help students build real-world skills effectively.",
    img: "data:image/jpeg;base64,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",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Miss.Z",
    text: " a dedicated and passionate educator with over 8 years of experience in the field of computer science and web development. He holds a Master’s degree in Computer Applications and is a certified ReactJS and Front-End Development instructor. His interactive teaching style and deep subject knowledge help students build real-world skills effectively.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHokcwkSpC9Kml9fF3CqLUDAVLNp9fAneIFg&s",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Mr.X",
    text: "a dedicated and passionate educator with over 8 years of experience in the field of computer science and web development. He holds a Master’s degree in Computer Applications and is a certified ReactJS and Front-End Development instructor. His interactive teaching style and deep subject knowledge help students build real-world skills effectively.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6T6rwdnSuDEmUaH0hM1GaI2u-tbt-8ifiA&s",
    delay: 1.1,
  },
  {
    id: 5,
    name: "Mr.Y",
    text: "a dedicated and passionate educator with over 8 years of experience in the field of computer science and web development. He holds a Master’s degree in Computer Applications and is a certified ReactJS and Front-End Development instructor. His interactive teaching style and deep subject knowledge help students build real-world skills effectively.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6T6rwdnSuDEmUaH0hM1GaI2u-tbt-8ifiA&s",
    delay: 1.1,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-10 py-5">
      <div className="container">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            Our Testimonials
          </h1>
          <p className="font-semibold text-3xl">
            What Our Students Say About Us
          </p>
        </div>

        {/* cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-semibold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.name}</p>
                      </div>
                    </div>

                    {/* bottom section  */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p className="">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
