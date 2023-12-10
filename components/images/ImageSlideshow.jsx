"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlideshow = () => {
  const images = [
    { image: "/burger.jpg", alt: "A delicious, juicy burger" },
    { image: "/curry.jpg", alt: "A delicious, spicy curry" },
    { image: "/dumplings.jpg", alt: "Steamed dumplings" },
    { image: "/macncheese.jpg", alt: "Mac and cheese" },
    { image: "/pizza.jpg", alt: "A delicious pizza" },
    { image: "/schnitzel.jpg", alt: "A delicious schnitzel" },
    { image: "/tomato-salad.jpg", alt: "A delicious tomato salad" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev < images?.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      {images.map((image, index) => (
        <div key={image?.alt}>
          <Image
            width={1600}
            height={1600}
            src={image?.image}
            alt={image?.alt}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } w-72 h-72 transition-all duration-300`}
          />
        </div>
      ))}
    </div>
  );
};
export default ImageSlideshow;
