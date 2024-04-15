import React from "react";

export default function Feedback() {
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Contact Us
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Write your feeedback and experience on our website
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transprent rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-transprent rounded border border-gray-300 focus:border-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-blue-700 transition ease-in-out duration-150 hover:-translate-y-1 hover:scale-110 font-bold border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 rounded-lg text-lg ">
                  Submit
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
