import Button from "./elements/Button";
import { ProductsPreview } from "./ProductsPreview";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const Banner = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const handleClick = () => {
    // ref.current?.scrollIntoView({ behaviour: "smooth" });
    navigate("/cart");
  };
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
      <div className="banner-deescription w-full md:w-1/2 p-3">
        <h2 className="mb-6 text-4xl font-bold text-white">
          Turning every leftover into a lifeline.
        </h2>
        <p className="font-semibold text-lg text-green-400 py-2">
          Get Started Today!
        </p>
        <div className="btn-container">
          <Button onClick={handleClick}>Order Now</Button>
          <a
            href="/menu"
            className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3"
          >
            See Menu
          </a>
        </div>
      </div>
      <div className="banner-image w-full md:w-3/4 p-3 flex justify-end">
        <img
          src={require("../assets/images/leftover-new.png")}
          alt="banner"
          className="max-h-95"
        />
      </div>
      <div ref={ref} className="m-100"></div>
    </div>
  );
};
