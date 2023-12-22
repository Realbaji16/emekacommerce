import React from "react";
import herogirl from "../../images/hert.png";
import frame from "../../images/frame.png";
import elip from "../../images/Ellipse.png";

const Hero = () => {
  const observed = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidder");

  hiddenElements.forEach((e1) => observed.observe(e1));

  const observeds = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("shows");
      } else {
        entry.target.classList.remove("shows");
      }
    });
  });

  const hidderElements = document.querySelectorAll(".hidders");

  hidderElements.forEach((e1) => observeds.observe(e1));

  return (
    <section className=" text-gray-600 body-font ">
      <div className="container1 mx-auto flex px-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <div className="flex hidder flex-col  w-full mb-5">
            <h1 className="heros font-medium title-font txts text-gray-900">
              Dress to Impress<br /> with Our <br /><span className="fash">Fashion-Forward</span><br /> Collection.
            </h1>
          </div>
          <p className="haps mb-8 leading-relaxed">
          Whether you're seeking a wardrobe refresh or seeking to redefine <br/> your personal style, our collection offers endless possibilities to <br/>create looks that exude confidence and leave a lasting impression."
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white capa2 border-0 py-2 px-16 focus:outline-none  rounded text-lg">
              Contact Us
            </button>
          </div>
        </div>
       
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
         
            alt="hero"
            src={frame}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
