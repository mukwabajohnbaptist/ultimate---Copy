import { faRandom } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navbar from "../Components/Home/Navbar";
import PrimaryFooter from "../Components/Home/PrimaryFooter";
import { fortportal, weekend, lake } from "../Components//images//images";

const Events = () => {
  return (
    <div>
      <Navbar />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src={lake} alt="wallpaper" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2">
          <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>            <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

            <div class="mt-3 flex items-end justify-between">
              <p>
                <span class="text-lg font-bold text-orange-500">$1,421</span>
                <span class="text-sm text-slate-400">/night</span>
              </p>

              <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src={weekend} alt="wallpaper" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2">
          <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>            <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

            <div class="mt-3 flex items-end justify-between">
              <p>
                <span class="text-lg font-bold text-orange-500">$1,421</span>
                <span class="text-sm text-slate-400">/night</span>
              </p>

              <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src={fortportal} alt="wallpaper" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2">
          <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>            <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

            <div class="mt-3 flex items-end justify-between">
              <p>
                <span class="text-lg font-bold text-orange-500">$1,421</span>
                <span class="text-sm text-slate-400">/night</span>
              </p>

              <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src={lake} alt="wallpaper" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2">
          <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>            <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

            <div class="mt-3 flex items-end justify-between">
              <p>
                <span class="text-lg font-bold text-orange-500">$1,421</span>
                <span class="text-sm text-slate-400">/night</span>
              </p>

              <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src={lake} alt="wallpaper" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2">
          <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>            <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

            <div class="mt-3 flex items-end justify-between">
              <p>
                <span class="text-lg font-bold text-orange-500">$1,421</span>
                <span class="text-sm text-slate-400">/night</span>
              </p>

              <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src={lake} alt="wallpaper" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2">
          <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>            <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

            <div class="mt-3 flex items-end justify-between">
              <p>
                <span class="text-lg font-bold text-orange-500">$1,421</span>
                <span class="text-sm text-slate-400">/night</span>
              </p>

              <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PrimaryFooter />
    </div>
  );
};

export default Events;
