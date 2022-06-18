import { useState } from "react";

const Form = () => {
  const [titleReport, setTitleReport] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [vNumber, setVNumber] = useState("");
  const [engineeringDiscipline, setEngineeringDiscipline] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [workTermSeason, setWorkTermSeason] = useState("");
  const [workTermYear, setWorkTermYear] = useState("");
  const [workTermNumber, setWorkTermNumber] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [dueDate, setDueDate] = useState("");

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
    <section className="w-full max-w-sm">
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
        <label className="block" htmlFor="position">
          <span className="text-gray-700">Position</span>
          <input
            name="position"
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
            value={position}
            onChange={(event) => setPosition(event.target.value)}
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
        <label className="block" htmlFor="address">
          <span className="text-gray-700">Address</span>
          <input
            name="address"
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
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </label>
        <label className="block" htmlFor="city">
          <span className="text-gray-700">City</span>
          <input
            name="city"
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
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
        </label>
        <label className="block" htmlFor="province">
          <span className="text-gray-700">Province</span>
          <input
            name="province"
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
            value={province}
            onChange={(event) => setProvince(event.target.value)}
            required
          />
        </label>
        <label className="block" htmlFor="postal-code">
          <span className="text-gray-700">Postal Code</span>
          <input
            name="postal-code"
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
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            required
          />
        </label>
        <label className="block" htmlFor="work-term-season">
          <span className="text-gray-700">Work Term Season</span>
          <input
            name="work-term-season"
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
            value={workTermSeason}
            onChange={(event) => setWorkTermSeason(event.target.value)}
            required
          />
        </label>
        <label className="block" htmlFor="work-term-year">
          <span className="text-gray-700">Work Term Year</span>
          <input
            name="work-term-year"
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
            value={workTermYear}
            onChange={(event) => setWorkTermYear(event.target.value)}
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
        <label className="block" htmlFor="due-date">
          <span className="text-gray-700">Due Date</span>
          <input
            name="due-date"
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
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
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
    </section>
  );
};

export default Form;
