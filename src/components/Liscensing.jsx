import aboutImage from "../assets/images/about-image.png";
import ImageSlider from "./ImageSlider";
export const Liscensing = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">Licensing</h2>
          <p className="text-lg my-5">
            Bitecycle is licensed under the web app license. This license grants
            you the non-exclusive, non-transferable right to use Bitecycle for
            personal and non-commercial purposes only. You may not modify,
            reverse engineer, decompile, or disassemble Bitecycle.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};
