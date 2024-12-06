import React, { useEffect } from "react";
import frame from "../../images/frame.png";

const Hero = () => {
  useEffect(() => {
    const observed = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidder");
    hiddenElements.forEach((el) => observed.observe(el));

    return () => {
      hiddenElements.forEach((el) => observed.unobserve(el));
    };
  }, []);

  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto px-5 py-16 md:py-24 grid lg:grid-cols-2 items-center">
        {/* Text Section */}
        <div className="lg:pr-10 flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
          <div className="hidder w-full mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Dress to Impress
              <br />
              with Our
              <br />
              <span className="text-indigo-600">Fashion-Forward</span>
              <br />
              Collection.
            </h1>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
            Whether you're seeking a wardrobe refresh or redefining your
            personal style, our collection offers endless possibilities to
            create looks that exude confidence and leave a lasting impression.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="inline-flex text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-8 md:px-12 rounded-lg text-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg mx-auto">
          <img
            src={frame}
            alt="Fashion Illustration"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
