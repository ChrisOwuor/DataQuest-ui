import { useContext } from "react";
import DataContext from "../contexts/DataContext";

export default function AddEntry() {
  const { setDepartment, departments,  active, setActive } =
    useContext(DataContext);

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setActive("Owner");
  };
  return (
    <>
      {" "}
      {active === "department" && (
        <div className="mt-10">
          <div className="headi">
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              aspernatur eius eveniet repellat? Culpa nemo facere aut voluptates
              nihil nostrum?
            </p>
          </div>
          <div className="department_selection grid grid-cols-3  w-2/4  ">
            <div className="grid col-span-2  ">
              {" "}
              <form className="w-4/5 ">
                <label className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-white">
                  Select your Department
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleDepartmentChange}
                ><option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div className="grid col-span-1 mt-8  ">
              {" "}
              <div>
                {" "}
                <button
                  className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSubmit}
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
