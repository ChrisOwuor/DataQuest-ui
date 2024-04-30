import { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";
import LegalGuideModal from "../components/Modal";

export default function LegalGuide() {
  const {
    policies,
    active,
    setActive,
    setSelectedPolicyObj,
    policyObj,
  } = useContext(DataContext);
  const [open, setOpen] = useState(false);

  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const handlePolicyChange = (e) => {
    setSelectedPolicy(e.target.value);
    setOpen(true);
  };

  const handlePolicySubmit = () => {

    setActive("enhancement");
  };
  return (
    <>
      {active === "policy" && (
        <div className="mt-10">
          <LegalGuideModal
            open={open}
            setOpen={setOpen}
            selectedPolicy={selectedPolicy}
            setSelectedPolicyObj={setSelectedPolicyObj}
            policyObj={policyObj}
          />
          <div className="headi">
            <p className="block mb-2 text-lg text-start font-medium text-gray-900 dark:text-white">
              Select the guiding legal instrument/policy for your services
            </p>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              aspernatur eius eveniet repellat? Culpa nemo facere aut voluptates
              nihil nostrum?
            </p>
          </div>
          <div className="department_selection grid grid-cols-1 w-full mt-4 ">
            {policies.map((pol) => (
              <div key={pol.id} className="flex items-center mb-4 ">
                <div className="flex items-center mb-4 ">
                  <input
                    type="radio"
                    value={pol.name}
                    name="default-radio"
                    onChange={handlePolicyChange}
                    className="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                    {pol.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button
              className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handlePolicySubmit}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </>
  );
}
