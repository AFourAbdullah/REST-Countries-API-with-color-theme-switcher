import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import Card from "./Card";
import FilterRegion from "./FilterRegion";

const AllCountries = ({ darkMode, setdarkMode }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllCountries = async (region) => {
    if (region) {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } else {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    }
  };
  // const getByRegion = async (region) => {};
  useEffect(() => {
    fetchAllCountries();
  }, []);
  //   console.log(countries);

  return (
    <>
      {isLoading ? (
        <div className={darkMode ? "loadDark" : "loading"}>Loading.. </div>
      ) : (
        <div className="mainContainer">
          <FilterRegion
            onselect={fetchAllCountries}
            darkMode={darkMode}
            setdarkMode={setdarkMode}
          />

          <div className="container">
            {countries.map((country) => {
              return (
                <Card
                  country={country}
                  darkMode={darkMode}
                  setdarkMode={setdarkMode}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AllCountries;
