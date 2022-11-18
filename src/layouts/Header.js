import React from "react";
import { Link } from "react-router-dom";
import { ChartPieIcon } from "@heroicons/react/20/solid";
// import Logo from "../assets/immunomic.jpeg";

export default function Header() {
  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-start py-5 ml-5 md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <ChartPieIcon className="w-8 h-8 text-yellow-500" />
            <span className="w-full text-xl font-bold text-yellow-500 ">
              Immunomic
            </span>
          </Link>
        </div>
        <div className="hidden items-center  justify-end md:flex md:flex-1 lg:w-0">
          <Link
            to="/about"
            className="font-medium leading-6 mr-5 text-gray-600 hover:text-gray-900"
          >
            About Us
          </Link>
          <a
            href="https://github.com/shivamangina/Chainlink-hackathon-fall-22-BE#chainlink-fall-2022-hackathon"
            target="_blank"
            className="font-medium leading-6 text-gray-600 hover:text-gray-900"
          >
            Our Project
          </a>
          <a
            href="#"
            target="_blank"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
          >
            Demo
          </a>
        </div>
      </div>
    </section>
  );
}
