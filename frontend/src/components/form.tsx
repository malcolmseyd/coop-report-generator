// import { useEffect, useRef, useState } from "react";

const Form = () => {
  const handleClick = (event: any) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <>
      <div className="mt-8 max-w-md px-6">
        <form onSubmit={handleClick} className="grid grid-cols-1 gap-6">
          <label className="block" htmlFor="report-title">
            <span className="text-gray-700">Title of Report</span>
            <input
              name="report-title"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
              required
            />
          </label>
          <label className="block" htmlFor="company-name">
            <span className="text-gray-700">Company Name</span>
            <input
              name="company-name"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label className="block" htmlFor="company-location">
            <span className="text-gray-700">Company Location</span>
            <input
              name="company-location"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label className="block" htmlFor="student-name">
            <span className="text-gray-700">Student Name</span>
            <input
              name="student-name"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label className="block" htmlFor="v-number">
            <span className="text-gray-700">V Number</span>
            <input
              name="v-number"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label className="block" htmlFor="email-address">
            <span className="text-gray-700">Email Address</span>
            <input
              name="email-address"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label className="block" htmlFor="engineering-discipline">
            <span className="text-gray-700">Engineering Discipline</span>
            <input
              name="engineering-discipline"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label className="block" htmlFor="work-term-number">
            <span className="text-gray-700">Work Term Number</span>
            <input
              name="work-term-number"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label className="block" htmlFor="project-topic">
            <span className="text-gray-700">Project Topic / Area of Work</span>
            <input
              name="project-topic"
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <button
            type="submit"
            className="rounded-md bg-blue-700 p-2 text-white outline-none ring-blue-900 ring-offset-2 hover:bg-blue-900 hover:ring-2 focus:bg-blue-900 focus:ring-2"
          >
            Generate Report
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
