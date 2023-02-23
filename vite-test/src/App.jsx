import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const App = () => {
  return (
    <>
      <h3>Select</h3>
      <Select options={options} />
      <h3>Creatable Multiselect</h3>
      <CreatableSelect isMulti options={options} />
    </>
  );
};

export default App;
