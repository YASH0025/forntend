/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductInfo = () => {
  const [products, setProducts] = useState([]);
  // const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.href;
        const parts = url.split("/");
        const id = parts[parts.length - 1];
        const categoryId = id; // Move categoryId declaration inside useEffect
        if (categoryId) {
          const res = await fetchProductInfo(categoryId);
          console.log(res);
          if (Array.isArray(res)) {
            setProducts(res);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Remove categoryId from the dependency array

  const fetchProductInfo = async (categoryId: any) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admin/filtered?categoryId=${categoryId}`
      );
      if (response.ok) {
        const productData = await response.json();
        console.log(productData);
        return productData;
      } else {
        throw new Error("Failed to fetch product info");
      }
    } catch (error) {
      console.error("Error fetching product info:", error);
      return []; // Return empty array or handle error as needed
    }
  };

  return (
    <>
      <h1>ProductInfo</h1>
      {/* Render your products here */}
    </>
  );
};

export default ProductInfo;
