import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className=" flex justify-between">
      <Link to={"/"} className=" p-2 text-xl font-bold ">
        DataQuest.Inc
      </Link>
      <Link to={"/add"} className="bg-gray-200 rounded-md p-2 flex items-center ">
        <Add/> Add Entry
      </Link>
    </div>
  );
}
