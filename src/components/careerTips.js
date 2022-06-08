import React from "react";
import Achieve from "../assets/achieve.png";
import Job2 from "../assets/job2.png";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";

function CareerTips() {
  return (
    <div>
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-white"
        />
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-36">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-white">
                    <InboxIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-semibold tracking-tight text-[#112d58]">
                    Million of jobs, finds the one thats rights for you
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Analytics bootstrapping buzz first mover advantage network
                    effects funding handshake. Buyer social media burn rate
                    interaction design prototype handshake.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl   lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={Job2}
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-36">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-semibold tracking-tight text-[#112d58]">
                    Find your passion and achieve success
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Analytics bootstrapping buzz first mover advantage network
                    effects funding handshake. Buyer social media burn rate
                    interaction design prototype handshake.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl   lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={Achieve}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CareerTips;
