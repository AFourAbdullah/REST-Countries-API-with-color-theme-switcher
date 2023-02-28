import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllCountries from "./components/AllCountries";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import SearchFeed from "./components/SearchFeed";

function App() {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} setdarkMode={setdarkMode} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AllCountries darkMode={darkMode} setdarkMode={setdarkMode} />
          }
        />
        <Route
          path="/country/:countryName"
          element={
            <CountryDetails darkMode={darkMode} setdarkMode={setdarkMode} />
          }
        />
        <Route
          path="/search/:searchTerm"
          element={<SearchFeed darkMode={darkMode} setdarkMode={setdarkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
