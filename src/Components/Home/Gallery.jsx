import React from 'react'
import { Trek4, Trek9, Trek3, Trek6 } from '../images/images'

const Gallery = () => {
  return (
    <div>
      <div class="p-4 bg-gray-50 sm:p-6 dark:bg-gray-100">
        <div class="mx-auto max-w-screen-xl">
          {/* content */}
          <div>
            <h2 class="p-10 text-center mb-4 text-4xl font-extrabold text-gray-900 dark:text-red">From our Gallery</h2>
          </div>
          {/* Image grid */}
          <div class="grid grid-cols-6 col-span-2   gap-2  ">
            <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img class="h-full w-full object-cover "
                src={Trek4}
                alt="" />
            </div>
            <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img class="h-full w-full object-cover  "
                src={Trek9}
                alt="" />
            </div>
            <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img class="h-full w-full object-cover "
                src={Trek3}
                alt="" />
            </div>
            <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img class="h-full w-full object-cover "
                src={Trek6}
                alt="" />
            </div>
            <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <div
                class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                + 23
              </div>
              <img class="h-full w-full object-cover "
                src={Trek9}
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
