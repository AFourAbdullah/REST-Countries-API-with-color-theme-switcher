import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";

const SearchFeed = ({ darkMode, setdarkMode }) => {
  const { searchTerm } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetails, setCountryDetails] = useState();

  const fetchCountryDetails = async () => {
    if (searchTerm) {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchTerm}`
      );
      const data = await res.json();
      setCountryDetails(data);
      setIsLoading(false);
      // console.log(data);
    }
  };
  useEffect(() => {
    fetchCountryDetails();
  }, [searchTerm]);
  console.log(countryDetails);
  return (
    <div className={darkMode ? "detailsMainDark" : "detailsMain"}>
      {countryDetails && countryDetails.message === "Not Found" ? (
        <>
          <Link to="/" className={darkMode ? "backDarkHome" : "backHome"}>
            <i className="fa fa-arrow-left" style={{ fontSize: "24px}" }}></i>
            Back To Home Page
          </Link>
          <div className={darkMode ? "loadDark" : "loading"}>
            No such countries found!{" "}
          </div>
        </>
      ) : (
        <div className="searchFeed">
          {isLoading ? (
            <div className={darkMode ? "loadDark" : "loading"}>Loading.. </div>
          ) : (
            <>
              <div>
                <Link
                  to="/"
                  className={darkMode ? "backDarkHomeS" : "backHomeS"}
                >
                  <i
                    className="fa fa-arrow-left"
                    style={{ fontSize: "24px}" }}
                  ></i>
                  Back To Home Page
                </Link>
              </div>
              <div className="containerNew">
                {countryDetails.map((country) => (
                  <Card country={country} darkMode={darkMode} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFeed;
