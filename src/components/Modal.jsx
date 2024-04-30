import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function LegalGuideModal({
  open,
  setOpen,
  selectedPolicy,
  policyObj,
  setSelectedPolicyObj,
}) {
  const handleClose = () => setOpen(false);
  const [change, setChange] = useState("");
  const [requireChange, setRequireChange] = useState(false);
  const [requiredDescription, setRequiredDescription] = useState("");
  const HandlePolicySubmit = () => {
    setSelectedPolicyObj({
      ...policyObj,
      name: selectedPolicy,
      change: change,
      requireChange: requireChange,
      requiredDescription: requiredDescription,
    });
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md ">
          <Typography
            id="modal-modal-description"
            className="flex justify-between items-center"
            sx={{ mt: 2 }}
          >
            {selectedPolicy}
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              {selectedPolicy === "Others" && (
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                    onChange={(e) => setChange(e.target.value)}
                  />
                </div>
              )}

              <>
                {selectedPolicy !== "Others" && (
                  <>
                    <div className="col-span-2 sm:col-span-2 ">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Does it require changes in order to enhance service
                        delivery?
                      </label>
                      <select
                        onChange={(e) => {
                          setRequireChange(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Select category</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        If yes, indicate the change required.
                      </label>
                      <textarea
                        onChange={(e) => {
                          setRequiredDescription(e.target.value);
                        }}
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write change description here"
                      ></textarea>
                    </div>
                  </>
                )}
              </>
            </div>
            <button
              onClick={HandlePolicySubmit}
              type="button"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
