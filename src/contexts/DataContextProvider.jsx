import { useState } from "react";
import DataContext from "./DataContext";
import Services from "../datasets/Services";
import Policies from "../datasets/Policies";
import Departments from "../datasets/Depertments";
import Owners from "../datasets/Owners";
import Timelines from "../datasets/Timelines";
export default function DataContextProvider({ children }) {
  const [services, setService] = useState(Services);
  const [policies, setPolicies] = useState(Policies);
  const [owners, setOwners] = useState(Owners);
  const [departments, setDepartments] = useState(Departments);
  const [timeline, setTimeline] = useState(Timelines);
  // main user response
  const [department, setDepartment] = useState("");
  const [deptOwner, setDepartOwner] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedServiceStatus, setSelectedServiceStatus] = useState([]);
  const [policyObj, setSelectedPolicyObj] = useState({});
  // navigating the responses
  const [active, setActive] = useState("department");

  const stu = {
    services,
    setService,
    policies,
    setPolicies,
    department,
    setDepartment,
    deptOwner,
    setDepartOwner,
    selectedServices,
    setSelectedServices,
    selectedServiceStatus,
    setSelectedServiceStatus,
    departments,
    setDepartments,
    policyObj,
    setSelectedPolicyObj,
    active,
    setActive,
    owners,
    setOwners,
    timeline,
    setTimeline,
  };

  return <DataContext.Provider value={stu}>{children}</DataContext.Provider>;
}
