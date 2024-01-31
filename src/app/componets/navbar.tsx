/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import the Link component from Next.js
import "tailwindcss/tailwind.css";

const Navbar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => setShow(!show);

  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-white py-2 shadow-2xl lg:flex-wrap lg:justify-start lg:py-4 animate-navbar">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="block border-0 bg-transparent px-2 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          onClick={toggleShow}
        >
          <span className="w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          className={`${
            show ? "block" : "hidden"
          } flex-grow basis-[100%] items-center lg:!flex lg:basis-auto`}
        >
          <div
            className="mb-4 ml-2 mr-5 mt-3 flex items-center text-gray-900 hover:text-blue-600 focus:text-blue-600 lg:mb-0 lg:mt-0 cursor-pointer font-medium"
            onClick={() => console.log("TE Logo Clicked")}
          >
            <img
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              style={{ height: "15px" }}
              alt="TE Logo"
              loading="lazy"
            />
          </div>
          <ul className="list-none mr-auto flex flex-col pl-0 lg:flex-row">
            <li className="mb-8 lg:mb-0 lg:pr-2 cursor-pointer font-medium">
              <Link href="/users/category" className="hover:text-blue-600">
                Category
              </Link>
            </li>
            <li className="mb-48lg:mb-0 lg:pr-2 cursor-pointer px-9 font-medium">
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li className="mb-8 lg:mb-0 lg:pr-2 cursor-pointer px-9 font-medium">
              <Link href="/contact" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative flex items-center">
          <a href="#" className="mr-4 text-gray-600 hover:text-gray-700">
            <span className="w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </span>
          </a>
          <div className="relative">
            <a href="#" className="hidden-arrow flex items-center">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                className="rounded-full"
                style={{ height: "25px", width: "25px" }}
                alt=""
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
