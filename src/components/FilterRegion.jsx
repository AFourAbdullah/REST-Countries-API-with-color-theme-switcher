import React from "react";
import { Link } from "react-router-dom";

const FilterRegion = ({ onselect, darkMode }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onselect(regionName);
  };
  return (
    <div
      className={darkMode ? "filterBoxDark" : "filterBox"}
      onChange={selectHandler}
    >
      <select>
        <option value="" key="">
          Select By Region
        </option>
        <option className="option" value="Africa">
          Africa
        </option>
        <option className="option" value="America">
          America
        </option>
        <option className="option" value="Asia">
          Asia
        </option>
        <option className="option" value="Europe">
          Europe
        </option>
        <option className="option" value="Oceania">
          Oceania
        </option>
        <option className="option" value="">
          All Countries
        </option>
      </select>
    </div>
  );
};

export default FilterRegion;
