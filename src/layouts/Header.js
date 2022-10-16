import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              React App
            </span>
          </Link>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <Link
              to="/"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
