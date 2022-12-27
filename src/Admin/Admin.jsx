import React from "react";
import { logo } from "../Components/images/images";
import { useState } from "react";

const Admin = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Blog Updates" },
    { title: "Events Manager" },
    { title: "Bike Rentals" },
    { title: "Manage Bookings" },
    { title: "Manage Comments" },
    { title: "Profile" },
  ];
  return (
    <div className="flex ">
      <div
        className={
          'h-screen bg-red-900 p-5 pt-8 ${open ? "w-72" : "w-20"} relative'
        }
      >
        <i
          onClick={() => setOpen(!open)}
          class="bg-red-900 text-gray-100 fa fa-arrow-left absolute -right-3 top-9 rounded-full boarder border-gray-100 cursor-pointer "
        ></i>
        <div className="w-full inline-flex justify-center items-center">
          <img className="w-12  h-12 rounded" src={logo} alt="" />
          <h3 className="ml-1 origin-left text-orange-100 font-medium text-2x1">
            Ultimate Cycling Uganda
          </h3>
        </div>
        <ul className="pt-2">
          <div>
            <ul className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 hover:text-red-900 rounded-md mt-2">
              <li className="text-base font-medium flex-1">Blog Updates</li>
              <li className="text-base font-medium flex-1">Blog Updates</li>
              <span className="text-base font-medium flex-1">Blog Updates</span>
              <span className="text-base font-medium flex-1">Blog Updates</span>
              <span className="text-base font-medium flex-1">Blog Updates</span>
              <span className="text-base font-medium flex-1">Blog Updates</span>
              <span className="text-base font-medium flex-1">Blog Updates</span>

            </ul>
          </div>
        </ul>
      </div>
      <div className="p-7">Admin content</div>
    </div>
  );
};

export default Admin;
