import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({ darkMode }) => {
  const [countryDetails, setCountryDetails] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const { countryName } = useParams();
  const fetchCountryDetails = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await res.json();
    setCountryDetails(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCountryDetails();
  }, []);
  console.log(countryDetails);

  //   const { flags, name, population, region, capital, currencies } =
  //     countryDetails;
  return (
    <div className={darkMode ? "detailsMainDark" : "detailsMain"}>
      {isLoading ? (
        <div className={darkMode ? "loadDark" : "loading"}>Loading.. </div>
      ) : (
        <>
          <Link to="/" className={darkMode ? "backDarkHome" : "backHome"}>
            <i className="fa fa-arrow-left" style={{ fontSize: "24px}" }}></i>
            Back To Home Page
          </Link>
          {countryDetails.map(
            ({
              name,
              capital,
              region,
              population,
              flags,
              continents,
              languages,
              currencies,
              coatOfArms,
            }) => (
              <>
                <div
                  className={darkMode ? "countryDetailsDark" : "countryDetails"}
                  key={name}
                >
                  <img src={flags.png} alt="" className="flagInDetails" />
                  <div className="countryDetailValuesOne">
                    <h3 className="title">{name.common}</h3>
                    <div className="otherDetails">
                      <p>Population: {population}</p>
                      <p>Region: {region}</p>
                      <p>Capital: {capital}</p>
                      <p>Continent: {continents}</p>
                      <p>Languages: {Object.values(languages)[0]}</p>
                      <p>Currencies: {Object.values(currencies)[0].name}</p>
                    </div>
                  </div>
                  <div className="countryDetailValuesTwo">
                    <p>ARMS OF COAT:</p>
                    <img
                      src={coatOfArms.png}
                      alt=""
                      className={darkMode ? "armsDark" : "armsWhite"}
                    />
                  </div>
                </div>
              </>
            )
          )}
        </>
      )}
    </div>
  );
};

export default CountryDetails;
