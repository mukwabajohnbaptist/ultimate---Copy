import React from "react";
import { Link } from "react-router-dom";

const PrimaryFooter = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-red-500">Category</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Bike tours
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Jungle safaries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Camping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-red-500">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Web
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-red-500">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Brochure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Nonprofit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Educational
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-red-500">Business</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Infopreneur
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-100"
                  >
                    Forum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide text-red-500">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-red-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-orange-500 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Sign up for our newsletter and be updated on our upcoming events, tours and items in store.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            Ultimate cycling Uganda © Copyright {new Date().getFullYear()}{" "}
            Powered by{" "}
            <Link to="https://www.instagram.com/jombacreations/">
              JOMBA Creations
            </Link>
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300  hover:text-gray-100"
            >
              <i className="fa fa-tripadvisor"></i>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-gray-100"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-gray-100"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-gray-100"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryFooter;
