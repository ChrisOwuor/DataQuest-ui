import { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";

export default function Submission() {
  const { active, selectedServiceStatus, policyObj, department, deptOwner } =
    useContext(DataContext);

  const [loading, setLoading] = useState(false);

  const formBody = {
    dept_name: department,
    owner: deptOwner,
    services: selectedServiceStatus,
    policy: policyObj,
  };

  const HandleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      let response = await fetch(import.meta.env.VITE_API_KEY, {
        body: JSON.stringify(formBody),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();

      if (response.status === 201) {
        setLoading(false);
        alert(data.msg);
      }
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <>
      {active === "submmition" && (
        <form onSubmit={HandleSubmit}>
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="text-start font-semibold text-lg text-gray-900 whitespace-nowrap">
                Selected Services Details
              </caption>
              <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Service name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Timeline
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ecitizen
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Enhancement
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedServiceStatus &&
                  selectedServiceStatus.map((ser) => (
                    <tr
                      key={ser.id}
                      className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      {" "}
                      <td className="px-6 py-4">{ser.id}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {ser.name}
                      </th>
                      <td className="px-6 py-4">{ser.status}</td>
                      <td className="px-6 py-4">{ser.timeline}</td>
                      <td className="px-6 py-4 ">{ser.ecitizen}</td>
                      <td className="px-6 py-4">{ser.enhancement}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="otherInfo relative overflow-x-auto sm:rounded-lg">
            <div className="w-full text-sm text-left rtl:text-right  dark:text-gray-400">
              {" "}
              <p className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  Depatment:
                </span>
                <span>{department}</span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  Department Owner:
                </span>
                <span>{deptOwner}</span>
              </p>
              <div>
                <h1 className="text-sm font-semibold text-gray-900">
                  Policy Details
                </h1>
                <ol className="l list-disc pl-6">
                  <li>
                    {" "}
                    <p className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">
                        Policy Name:
                      </span>
                      <span>{policyObj.name}</span>
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">
                        Does Policy require Change:
                      </span>
                      <span>{policyObj.requireChange}</span>
                    </p>
                  </li>
                  <li>
                    <p className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">
                        Policy Change description
                      </span>
                      <span>{policyObj.requiredDescription}</span>
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {loading ? "loading " : "Submit Response"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
