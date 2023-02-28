import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ darkMode, setdarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      // setSearchTerm("");
    }
  };
  return (
    <div className={darkMode ? "headerDark" : "header"}>
      <h1>Where In The World?</h1>
      <div className="inputDiv">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search by country full name.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </form>
      </div>
      <div className="mode">
        {darkMode ? (
          <p onClick={() => setdarkMode(false)}>Light Mode</p>
        ) : (
          <p onClick={() => setdarkMode(true)}>Dark Mode</p>
        )}
      </div>
    </div>
  );
};

export default Header;
