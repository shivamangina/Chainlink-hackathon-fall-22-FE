import React from "react";
import { Link } from "react-router-dom";
import { ChartPieIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-start py-5 ml-5 md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <ChartPieIcon className="w-8 h-8" />
            <span className="text-l font-black leading-none text-gray-900 select-none">
              Immunomic
            </span>
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
          <a href="https://chain.link/hackathon">
            © 2022 - Chain Link Hackathon
          </a>
        </p>
      </div>
    </section>
  );
}
