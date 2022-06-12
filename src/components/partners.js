import React from "react";
import Partner from "../assets/partners.png";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";

function Partners() {
  return (
    <div>
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-white"
        />
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-36 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-60">
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
                    Over 10,000 top companies join with us
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Posting now includes out of the box integration with major
                    CRM & accounting and ERP platforms, as well as an open API
                    that allows you to seamlessly integrate with your business
                    systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img  data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              data-aos-once="true"
                  className="w-full rounded-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={Partner}
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
