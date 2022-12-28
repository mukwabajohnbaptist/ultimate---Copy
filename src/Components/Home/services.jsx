import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-red-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">What</span>
            </span>{" "}
            we offer{" "}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            A classified hands-on service{" "}
          </p>
        </div>
        <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-red-500 text-white lg:mb-0">
                  <i className="fa fa-tags"></i>
                </div>
                <h6 className="font-semibold leading-5">Bike sales </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Looking for a fully customizable, full featured, and confortable
                MTB. Grab one from our store with one year of after-sales
                service{" "}
              </p>
              <Link
                to="/Contact_us"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-gray-900 hover:text-orange-500"
              >
                <i className="mr-2 fa fa-hand-o-right"></i> Contact us
              </Link>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-red-500 text-white lg:mb-0">
                  <i className="fa fa-gears"></i>
                </div>
                <h6 className="font-semibold leading-5">
                  Bike repair and Servicing
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Get your bike fixed or upgraded with unlimited discounts on bike
                parts that come handy with integrated personalisation.{" "}
              </p>
              <Link
                Link="/Contact_us"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-gray-900 hover:text-orange-500"
              >
                <i className="mr-2 fa fa-hand-o-right"></i>Contact us
              </Link>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-red-500 text-white lg:mb-0">
                  <i className="fa fa-bicycle"></i>
                </div>
                <h6 className="font-semibold leading-5">Bike Tours</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Enjoy free roaming with us on guided tours. we offer bike tours
                that also come handy with bike rentals. we call this financial
                freedom for our low packages{" "}
              </p>
              <Link
                to="/Contact_us"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-gray-900 hover:text-orange-500"
              >
                <i className="mr-2 fa fa-hand-o-right"></i> Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
