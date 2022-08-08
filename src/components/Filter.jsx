/* eslint-disable react/prop-types */
import React from "react";
import { Select, Option } from "@material-tailwind/react";

const Filter = ({ setLeague, setCountry }) => {
  const handleLeagueChange = (e) => {
    setLeague(e);
  };
  const handleCountryChange = (e) => {
    setCountry(e);
  };
  return (
    <div className="w-72 mx-auto md:flex justify-center">
      <div className="p-1">
        <Select label="League" onChange={handleLeagueChange}>
          <Option value="">All</Option>
          <Option value="Serie A">Serie A</Option>
          <Option value="Serie B">Serie B</Option>
          <Option value="la liga">LaLiga</Option>
          <Option value="UEFA Champions League">UEFA Champions League</Option>
          <Option value="english premier league">English Premier League</Option>
        </Select>
      </div>

      <div className="p-1">
        <Select label="Country" onChange={handleCountryChange}>
          <Option value="">All</Option>
          <Option value="England">England</Option>
          <Option value="Germany">Germany</Option>
          <Option value="Spain">Spain</Option>
          <Option value="world">World</Option>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
