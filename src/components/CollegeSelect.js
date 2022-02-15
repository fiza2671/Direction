import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import {db} from "../firebase/config";
import {collection, getDocs} from "firebase/firestore";

const options = [
  { label: "Grapes ", value: "grapes" },
  { label: "Mango ", value: "mango" },
  { label: "Strawberry", value: "strawberry" },
];

const CollegeSelect = () => {

  const [selected, setSelected] = useState([]);

  return (<div>
    <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
  </div>);
};

export default CollegeSelect;
