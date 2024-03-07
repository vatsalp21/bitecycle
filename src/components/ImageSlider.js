import React, { useState, useEffect } from "react";

const images = [
  "https://manthanprakashan.in/wp-content/uploads/2021/06/india-hunger-a-087.jpg",
  "https://image.hurimg.com/i/hurriyet/75/0x0/5a003b277152d82f98e8ae33.jpg",
  "https://cdn.downtoearth.org.in/library/large/2023-06-19/0.44707700_1687153539_istock-807410162.jpg",
  "https://www.reuters.com/graphics/AFRICA-HUNGER/lgpdkknwlvo/cdn/images/ghana1.jpg",
  "https://t4.ftcdn.net/jpg/06/43/50/19/360_F_643501972_8DYCNGcVyDI84QafRdUsN7gX3x3UJ9Rt.jpg",
];

const ImageFrame = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const aboutImage = images[currentImageIndex];

  return (
    <div className="flex items-center justify-center">
      <img
        src={aboutImage}
        alt=""
        className="w-[400px] h-[400px] object-cover"
      />
    </div>
  );
};

export default ImageFrame;
