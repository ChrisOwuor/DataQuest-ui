import { useContext } from "react";
import DataContext from "../contexts/DataContext";

export default function SelectEcitizen() {
  const { active, setActive, selectedServiceStatus, setSelectedServiceStatus } =
    useContext(DataContext);
  const HandleEcitizen = (e, serv_id) => {
    const updatedServiceStatus = selectedServiceStatus.map((serv) => {
      if (serv.id === serv_id) {
        return {
          ...serv,
          ecitizen: e.target.value,
        };
      } else {
        return serv;
      }
    });
    setSelectedServiceStatus(updatedServiceStatus);
  };
  const HandleEcitizenSubmit = () => {
    setActive("policy");
  };
  return (
    <>
      {active === "Ecitizen" && (
        <div className="mt-10 w-3/5 ">
          <div className="headi">
            <p className="block mb-2 text-lg text-start font-medium text-gray-900 dark:text-white">
              Indicate if the services are on-boarded on E-Citizen platform
            </p>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              aspernatur eius eveniet repellat? Culpa nemo facere aut voluptates
              nihil nostrum?
            </p>
          </div>
          <div className="department_selection grid grid-cols-1 mt-4 ">
            <div className="relative overflow-x-auto  sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 pl-1">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className=" py-3">
                      Service name
                    </th>
                    <th scope="col" className=" py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedServiceStatus.map((serv) => (
                    <tr
                      key={serv.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {serv.name}
                      </th>
                      <td className=" py-4">
                        <form className="max-w-sm mx-auto">
                          <select
                            onChange={(e) => HandleEcitizen(e, serv.id)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected value="Yes">
                              Yes
                            </option>
                            <option value="No">No</option>
                          </select>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <button
                  className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={HandleEcitizenSubmit}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
