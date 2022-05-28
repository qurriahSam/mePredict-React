import React from "react";
import { Select, Option } from "@material-tailwind/react";

const Filter = () => {
  return (
    <div className="w-72">
      <Select label="League">
        <Option>Seria A</Option>
        <Option>LaLiga</Option>
        <Option>Ligue 1</Option>
        <Option>English Premier League</Option>
      </Select>
    </div>
  );
};

export default Filter;
