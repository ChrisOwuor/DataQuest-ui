import AddEntry from "./AddEntry";
import AddOwner from "./AddOwner";
import AddService from "./AddService";
import LegalGuide from "./LegalGuide";
import SelectEcitizen from "./SelectEcitizen";
import ServiceEnhancement from "./ServiceEnhancement";
import ServiceStatus from "./ServiceStatus";
import Submission from "./Submission";
import Timeline from "./Timeline";

export default function Entry() {
  return (
    <>
      <AddEntry />
      <AddOwner />
      <AddService />
      <ServiceStatus />
      <Timeline/>
      <SelectEcitizen />
      <LegalGuide />
      <ServiceEnhancement />
      <Submission/>
    </>
  );
}
