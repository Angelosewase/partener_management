import React from "react";
import ContactDetails from "../components/Contactdetail";
import GeneralInformation from "../components/GeneralInformation";

function MainPage() {
  return (
    <div className="border h-[100vh] flex items-center justify-center">
      <div className="flex rounded-3xl shadow-md flex-wrap md:flex-nowrap">
        <GeneralInformation />
        <ContactDetails />
      </div>
    </div>
  );
}

export default MainPage;
