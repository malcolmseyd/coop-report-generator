import { useEffect, useState } from "react";

const Form = () => {
  const [titleReport, setTitleReport] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [name, setName] = useState("");
  const [vNumber, setVNumber] = useState("");
  const [email, setEmail] = useState("");
  const [engineeringDiscipline, setEngineeringDiscipline] = useState("");
  const [workTermNumber, setWorkTermNumber] = useState("");
  const [projectTopic, setProjectTopic] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.table({
      titleReport,
      companyName,
      companyLocation,
      name,
      vNumber,
      email,
      engineeringDiscipline,
      workTermNumber,
      projectTopic,
    });
  };

  return (
    <>
      <div className="w-full max-w-sm">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
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
              value={titleReport}
              onChange={(event) => setTitleReport(event.target.value)}
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
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              required
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
              value={companyLocation}
              onChange={(event) => setCompanyLocation(event.target.value)}
              required
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
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
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
              value={vNumber}
              onChange={(event) => setVNumber(event.target.value)}
              required
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
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
              value={engineeringDiscipline}
              onChange={(event) => setEngineeringDiscipline(event.target.value)}
              required
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
              value={workTermNumber}
              onChange={(event) => setWorkTermNumber(event.target.value)}
              required
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
              value={projectTopic}
              onChange={(event) => setProjectTopic(event.target.value)}
              required
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
