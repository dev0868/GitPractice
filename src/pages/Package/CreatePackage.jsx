import { useState } from "react";
import { initialState } from "./packageContants";
import PackageInputForm from "./packageComponents/PackageInputForm";
const CreatePackage = () => {
  const [formData, setFormData] = useState(initialState);
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <PackageInputForm Value={formData} Onchange={handleChange} />
      </form>
    </>
  );
};

export default CreatePackage;
