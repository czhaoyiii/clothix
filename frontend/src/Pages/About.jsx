import Subscription from "../components/Subscription";
import Title from "../components/Title";
import aboutHero from "../assets/about_img.png";

export default function About() {
  return (
    <>
      <div className="text-2xl text-center pt-8 pb-3">
        <Title title1="ABOUT" title2="US" />
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img className="w-full md:max-w-[400px]" src={aboutHero} alt="" />

        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            Clothix was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="font-bold text-black">Our Mission</p>
          <p>
            Our mission at Clothix is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title title1="WHY" title2="CHOOSE US?" />
        <div className="flex flex-col md:flex-row text-sm mb-20 pt-4">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="font-bold">Quality Assurance:</p>
            <p className="text-gray-600">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="font-bold">Convenience:</p>
            <p className="text-gray-600">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="font-bold">Exceptional Customer Service:</p>
            <p className="text-gray-600">
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      <Subscription />
    </>
  );
}
