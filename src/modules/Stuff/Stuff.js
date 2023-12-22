import React, { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import Categories from "../../components/Categories/Categories";
import Featuress from "../../components/Features/Featuress";

const Stuff = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProdducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProdducts();
  }, []);

  return (
    <div>
     <Featuress />
      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ALL PRODUCTS
        </h1>
      </div>
      {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div>Loading...</div>
      }
      
    </div>
  )
}

export default Stuff;
