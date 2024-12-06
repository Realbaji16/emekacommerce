import React from "react";
import elect from "../../images/electronics.png";
import jewel from "../../images/jewel.png";
import men from "../../images/men.png";
import elects from "../../images/electr.png";
import jewels from "../../images/jewels.png";
import mens from "../../images/mensi.png";
import { Link } from "react-router-dom";

const Featuress = () => {
  const cards = [
    {
      id: 1,
      imgUrl: elect,
      smImg: elects,
      source: "Electronics",
      learn: "Learn More →",
      site: "electronics",
    },
    {
      id: 2,
      imgUrl: jewel,
      smImg: jewels,
      source: "Jewellery",
      learn: "Learn More →",
      site: "jewelery",
    },
    {
      id: 3,
      imgUrl: men,
      smImg: mens,
      source: "Men's Clothes",
      learn: "Learn More →",
      site: "men's clothing",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
            Master Cleanse Reliac Heirloom
          </h1>
        </div>
        {/* Updated Grid Structure */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/categories/${card.site}`}>
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={card.imgUrl}
                  alt={card.source}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-12 h-12"
                        src={card.smImg}
                        alt={card.source}
                      />
                      <p className="mt-2 text-center font-medium text-gray-700">
                        {card.source}
                      </p>
                    </div>
                    <p className="mt-2 bg-transparent text-blue-600 border border-blue-600 py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                      {card.learn}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featuress;
