import React from "react";

import Navbar from "./navbar";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <div
        className="w-full h-[100vh] top-[90px] bg-no-repeat bg-right-top bg-contain"
        id="backg"
      >
        <Navbar />

        <div className="w-full h-[70%] flex flex-col justify-center items-start text-black px-56 text-left hero ">
          <div>
            <h1 className="font-semibold text-5xl home-title">
              Find your job better and faster
            </h1>
            <p className="text-base font-light py-4 text-gray-500 hero-subtitle">
              Find your best job better and faster with Jobest
            </p>
            {/* <form action="#" method="POST" className="mt-3 sm:flex drop-shadow-xl">
              <label htmlFor="email" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300 pl-5"
                placeholder="Search for jobs"
              />
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Search
              </button>
            </form> */}
            <div class="pt-2 absolute mx-auto text-gray-600 drop-shadow-2xl">
              <input
                class=" bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <svg
                  class="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966;" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
