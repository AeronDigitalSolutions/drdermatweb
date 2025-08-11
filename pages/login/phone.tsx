import { useRouter } from "next/router";
import ModularForm from "@/components/forms/ModularForm";
import React, { useState } from "react";
import Topbar from "@/components/Layout/Topbar";
import Footer from "@/components/Layout/Footer";

const PhoneLogin = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const router = useRouter();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const phoneNumber = `${formData.get("countryCode")}${formData.get("phone")}`;

    console.log("OTP sent to:", phoneNumber);
    alert(`OTP sent to ${phoneNumber}`);
    router.push("/login/verify"); // Redirect to OTP verify page
  };


  const inputs = [
   
    {
      name: "phone",
      type: "tel",
      required: true,
      placeholder: "Enter your phone number",
      label: "Phone Number",
      maxLength: 15,
      onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) =>
        console.log(e.target.value),
      options: [],
      multipleselect: false,
    },
  ];

  return (
    <div>
      <Topbar />
      <div className="loginCard">
        <ModularForm
          formHead="Sign in to continue"
          inputs={inputs}
          submitButtonText="Generate OTP"
          submitHandler={handleLogin}
        />
      </div>

      <Footer/>
    </div>

  );
};

export default PhoneLogin;
