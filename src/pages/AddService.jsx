import { useContext } from "react";
import DataContext from "../contexts/DataContext";

export default function AddService() {
  const { services, selectedServices, setSelectedServices, setActive, active } =
    useContext(DataContext);

  const handleCheckboxChange = (e) => {
    const serviceDetails = {
      name: e.target.name,
      id: e.target.id,
    };
    if (e.target.checked) {
      setSelectedServices([...selectedServices, serviceDetails]);
    } else {
      setSelectedServices(
        selectedServices.filter((service) => service !== serviceDetails)
      );
    }
  };
  const HandleSubmit = () => {
    setActive("Status");
  };
  return (
    <>
      {active === "Services" && (
        <div className="mt-10">
          <div className="headi">
            <p className="block mb-2 text-lg text-start font-medium text-gray-900 dark:text-white">
              Select services your department offers to clients.
            </p>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              aspernatur eius eveniet repellat? Culpa nemo facere aut voluptates
              nihil nostrum?
            </p>
          </div>
          <div className="department_selection grid grid-cols-2 w-3/5 mt-5 ">
            <div className="col-span-1">
              {services.map((serv) => (
                <div key={serv.id} className="flex items-center mb-4 ">
                  <input
                    id={serv.id}
                    name={serv.name}
                    type="checkbox"
                    value={serv.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={handleCheckboxChange}
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {serv.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="grid col-span-1  ">
              {" "}
              <div>
                {" "}
                <button
                  className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={HandleSubmit}
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
