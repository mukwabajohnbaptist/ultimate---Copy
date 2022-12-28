import React from "react";
import { Link } from "react-router-dom";
import { brand1, brand2, brand3, brand4 } from "../images/images";

const Brands = () => {
  return (
    <div>
      <div className="p-4 bg-gray-500 sm:p-6 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl">
          <div className="py-8 mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
              Our Dealer Brands{" "}
            </h2>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
              <Link to="#" className="flex justify-center items-center">
                <img
                  className="h-9"
                  src={brand1}
                  alt=""
                />
              </Link>
              <Link to="#" className="flex justify-center items-center">
                <img
                  className="h-9"
                  src={brand3}
                  alt=""
                />
              </Link>
              <Link to="#" className="flex justify-center items-center">
                <img
                  className="h-9"
                  src={brand1}
                  alt=""
                />
              </Link>
              <Link to="#" className="flex justify-center items-center">
                <img
                  className="h-9"
                  src={brand3}
                  alt=""
                />
              </Link>
              <Link to="#" className="flex justify-center items-center">
                <img
                  className="h-9"
                  src={brand1}
                  alt=""
                />
              </Link>
              <Link to="#" className="flex justify-center items-center">
                <img
                  className="h-9"
                  src={brand3}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
