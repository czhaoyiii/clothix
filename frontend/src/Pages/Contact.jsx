import Title from "../components/Title";
import contactHero from "../assets/contact_img.png";
import Subscription from "../components/Subscription";

export default function Contact() {
  return (
    <>
      <div className="text-2xl text-center pt-8 pb-3">
        <Title title1="CONTACT" title2="US" />
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-10 my-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={contactHero} alt="" />

        <div className="flex flex-col justify-center gap-6 text-gray-600 items-start">
          <p className="font-bold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            098585 Vivocity,
            <br />
            Singapore
          </p>
          <p className="text-gray-500">
            +123 456 7890
            <br />
            contact@clothix.com
          </p>
          <p className="font-bold text-xl text-gray-600">Careers at Clothix</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <Subscription />
    </>
  );
}
