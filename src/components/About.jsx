import ImageSlider from "./ImageSlider";
export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">About Us</h2>
          <p className="text-lg">
            Welcome to our Food Waste Management and Redistribution System – a
            web-based community solution dedicated to addressing food waste
            issues and ensuring surplus food reaches those who need it. Our
            platform empowers users to make a positive impact on their community
            by connecting surplus food providers with nearby charities,
            shelters, or individuals in need. With user-friendly features and
            real-time updates, we offer a simple and efficient way to minimize
            food waste while fostering a sense of responsibility within
            communities. The website is named as BiteCycle. The Sustainability
            Development Goals targeted here are 2, 3 & 12.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};
