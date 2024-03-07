import ImageSlider from "./ImageSlider";
export const Terms = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">Terms & Conditions</h2>
          <p className="text-lg my-5">
            These Terms & Conditions govern your use of Bitecycle. By using
            Bitecycle, you agree to these Terms & Conditions. Use of the
            Service: You may only use Bitecycle for lawful purposes.
            Intellectual Property: Bitecycle owns all intellectual property
            rights to Bitecycle. Disclaimer: Bitecycle is provided "as is" and
            without warranty of any kind. Limitation of Liability: Bitecycle
            shall not be liable for any damages arising out of your use of
            Bitecycle. Please note: This is just a sample and does not cover all
            aspects of licensing, privacy, and terms & conditions. You will need
            to customize this content to fit your specific needs and comply with
            all applicable laws and regulations. It is important to consult with
            a legal professional to ensure that your licensing, privacy policy,
            and terms & conditions are legally sound and protect your interests.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};
