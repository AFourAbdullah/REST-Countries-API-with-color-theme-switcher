import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ country, darkMode, setdarkMode }) => {
  const [hover, setHover] = useState(false);
  const { name, population, region, capital, flags } = country;
  return (
    <Link
      className={darkMode ? "singleWhiteCard" : "singleCard"}
      to={`/country/${name.official}`}
    >
      <div>
        <img src={flags.png} alt="Flag" className="flag" />
        <div className="cardDetails">
          <h3 style={{ textAlign: "center" }}>Name:{name.common}</h3>
          <p style={{ textAlign: "center" }}>Capital: {capital}</p>
          <p style={{ textAlign: "center" }}>Population: {population}</p>
          <p style={{ textAlign: "center" }}>Region: {region}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
