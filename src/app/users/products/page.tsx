/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/app/componets/footer";
import Navbar from "@/app/componets/navbar";
import useAuth from "@/app/hooks/useAuth";
import { getProducts } from "@/app/services/user-activity.service";
import React, { useEffect } from "react";

const Products = () => {
  useAuth();
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        console.log(res);
        if (Array.isArray(res)) setProducts(res as any);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const data = fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-semibold mb-8">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products &&
            products.map((product: any, index) => (
              <div
                key={product.id}
                className={`bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-green-50"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover object-center transition-transform duration-300 transform hover:scale-110"
                    src={
                      product.image ||
                      `https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
                    }
                    alt={product.productId.name}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-gray-800 font-semibold text-lg mb-2">
                    {product.productId.name}
                  </h2>
                  <p className="text-gray-600">
                    {product.productId.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-700 font-bold">
                      ${product.productId.price}
                    </span>
                    <button className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
