import ImageSlider from "./ImageSlider";
export const Privacy = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">Privacy Policy</h2>
          <p className="text-lg my-5">
            Bitcycle is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and disclose your personal
            information. Information We Collect: We may collect personal
            information such as your name, email address, and IP address when
            you use our website or services. How We Use Your Information: We may
            use your personal information to provide you with our services, send
            you marketing communications, and improve our website and services.
            Your Choices: You can control your privacy settings and opt out of
            marketing communications at any time.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};
