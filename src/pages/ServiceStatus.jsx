import { useContext } from "react";
import DataContext from "../contexts/DataContext";

export default function ServiceStatus() {
  const { selectedServices, active, setActive, setSelectedServiceStatus } =
    useContext(DataContext);

  const handleStatusSubmit = () => {
    const updatedServices = selectedServices.map((serv) => {
      const selectInput = document.getElementById(`status-${serv.id}`);
      return {
        id: serv.id,
        name: serv.name,
        status: selectInput.value,
        ecitizen: "yes",
        enhancement: "yes",
        timeline:"none"
      };
    });
    setSelectedServiceStatus(updatedServices);
    setActive("Timeline");
  };

  return (
    <>
      {active === "Status" && (
        <div className="mt-10 w-3/5 ">
          <div className="headi">
            <p className="block mb-2 text-lg text-start font-medium text-gray-900 dark:text-white">
              What is the current status of the services selected above
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
                  {selectedServices.map((serv) => (
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
                            id={`status-${serv.id}`}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected value="Digital">
                              Digital
                            </option>
                            <option value="Manual">Manual</option>
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
                  onClick={handleStatusSubmit}
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
