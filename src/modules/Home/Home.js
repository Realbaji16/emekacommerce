import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Stats from "../../components/Stats/Stats";
import Categories from "../../components/Categories/Categories";
import Featuress from "../../components/Features/Featuress";

const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() =>{
        const fetchProdducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProdducts()
    }, [])
  return (
    <>
      <Hero />
      <Featuress />
    
      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="ft-head lg:text-4xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {
        products.length > 0 ?
        <Products products={products} />
        :
        <div>Loading.....</div>
      }
      <Products />
      <Stats />
    </>
  );
};

export default Home;
 