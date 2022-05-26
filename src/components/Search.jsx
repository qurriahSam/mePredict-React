/* eslint-disable react/prop-types */
import React from "react";
import { Input } from "@material-tailwind/react";

const Search = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="py-6 w-80 mx-auto">
      <Input
        variant="standard"
        label="Search"
        className="text-white"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
