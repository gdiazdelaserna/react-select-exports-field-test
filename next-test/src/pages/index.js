import React, { useId } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const HomePage = () => {
  return (
    <>
      <h3>Select</h3>
      <Select instanceId={useId()} options={options} />
      <h3>Creatable Multiselect</h3>
      <CreatableSelect instanceId={useId()} isMulti options={options} />
    </>
  );
};

export default HomePage;
