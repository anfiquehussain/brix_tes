import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

function SearchNav() {
  return (
    <div className="w-full border-t-2">
      <div className="flex w-full max-w-full items-center justify-between rounded-b-lg bg-brand-primary p-3 md:ms-10 md:w-1/2">
        {/* Location Select with Icon and Search Input in Row */}
        <div className="flex flex-grow items-center">
          {/* Location Icon and Select */}
          <div className="relative flex items-center">
            <IoLocationOutline className="absolute left-2 text-xl text-red-600" />
            <select className="appearance-none rounded-s-md border border-gray-300 py-2 pl-8 pr-4 focus:outline-none">
              <option value="">Ajman, UAE</option>
              <option value="">Dubai, UAE</option>
              <option value="">Sharjah, UAE</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:max-w-[250px] rounded-e-md border border-gray-300 py-2 pl-4 focus:outline-none"
            />
          </div>
        </div>

        {/* Call Icon */}
        <div className="flex items-center text-gray-700">
          <IoIosCall className="text-2xl text-brand-light-gray md:text-xl" />
        </div>
      </div>
    </div>
  );
}

export default SearchNav;
