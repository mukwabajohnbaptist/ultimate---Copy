import React from "react";
import { Link } from "react-router-dom";
import { fortportal, weekend, lake } from "../images/images";

const Events = () => {
  return (
    <div>
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
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
            <span className="relative">Our</span>
          </span>{" "}
          Upcoming Events{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Book your ultimate weekend guided MTB experience with us when you
          choose from our latest picks
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

        <div className=" rounded bg-green-900 p-3 shadow-lg hover:shadow-xl">
          <div className="w-full h-64 relative flex items-end overflow-hidden rounded">
            <img className=" object-cover transition hover:scale-105 " src={weekend} alt="wallpaper" />

            <div className="absolute bottom-0 left-4 inline-flex items-center rounded-t bg-red-500 p-2 shadow-md text-lg font-bold text-orange-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span className="ml-1">ON SALE</span>
            </div>
          </div>

          <div className="mt-1 p-2">
            <Link
              to="/Events"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-lg font-bold leading-5 text-white transition-colors duration-200 hover:text-orange-200"
            >
              Weekend ride accross Lake victoria
            </Link>{" "}
            <p className="mt-1 text-sm text-yellow-500">Kampala, Uganda</p>
            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-green-500">
                  $1,421
                </span>
                <span className="text-sm text-yellow-500">/Day</span>
              </p>

              <div className="group inline-flex items-center text-white rounded bg-green-500 p-2 hover:bg-orange-500">
                <Link to="/Events">
                  <i className="fa fa-bookmark mr-2"></i> BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" rounded bg-green-900 p-3 shadow-lg hover:shadow-xl">
          <div className="w-full h-64 relative flex items-end overflow-hidden rounded">
            <img className=" object-cover transition hover:scale-105 " src={fortportal} alt="wallpaper" />

            <div className="absolute bottom-0 left-4 inline-flex items-center rounded-t bg-red-500 p-2 shadow-md text-lg font-bold text-orange-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span className="ml-1">ON SALE</span>
            </div>
          </div>

          <div className="mt-1 p-2">
            <Link
              to="/Events"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-lg font-bold leading-5 text-white transition-colors duration-200 hover:text-orange-200"
            >
              Weekend ride accross Lake victoria
            </Link>{" "}
            <p className="mt-1 text-sm text-yellow-500">Kampala, Uganda</p>
            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-green-500">
                  $1,421
                </span>
                <span className="text-sm text-yellow-500">/Day</span>
              </p>

              <div className="group inline-flex items-center text-white rounded bg-green-500 p-2 hover:bg-orange-500">
                <Link to="/Events">
                  <i className="fa fa-bookmark mr-2"></i> BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" rounded bg-green-900 p-3 shadow-lg hover:shadow-xl">
          <div className="w-full h-64 relative flex items-end overflow-hidden rounded">
            <img className=" object-cover transition hover:scale-105 " src={lake} alt="wallpaper" />

            <div className="absolute bottom-0 left-4 inline-flex items-center rounded-t bg-red-500 p-2 shadow-md text-lg font-bold text-orange-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span className="ml-1">ON SALE</span>
            </div>
          </div>

          <div className="mt-1 p-2">
            <Link
              to="/Events"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-lg font-bold leading-5 text-white transition-colors duration-200 hover:text-orange-200"
            >
              Weekend ride accross Lake victoria
            </Link>{" "}
            <p className="mt-1 text-sm text-yellow-500">Kampala, Uganda</p>
            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-green-500">
                  $1,421
                </span>
                <span className="text-sm text-yellow-500">/Day</span>
              </p>

              <div className="group inline-flex items-center text-white rounded bg-green-500 p-2 hover:bg-orange-500">
                <Link to="/Events">
                  <i className="fa fa-bookmark mr-2"></i> BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
