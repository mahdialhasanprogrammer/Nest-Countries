import { useEffect, useState } from "react";
import Country from "../country/country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [markCountries, setMarkCountries] = useState([]);
  const [isMoreCountries, setIsMoreCountries] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const markVisitedCountries = (country) => {
    console.log(country);
    const newMarkCountries = [...markCountries, country];
    setMarkCountries(newMarkCountries);
  };

  const displayedCountries = () => {
    return isMoreCountries
      ? countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))
      : countries
          .slice(0, 12)
          .map((country) => (
            <Country
              markVisitedCountries={markVisitedCountries}
              key={country.cca3}
              country={country}
            />
          ));
  };

  return (
    <div>
      <h3>Countries: {isMoreCountries ? countries.length : 12}</h3>{" "}
      <button
        onClick={() => setIsMoreCountries(!isMoreCountries)}
        type="button"
      >
        {isMoreCountries ? "show less" : "show more"}
      </button>
      <h2>Marked Countries !!!</h2>
      <ul>
        {markCountries.map((country) => {
          return <li key={country.cca3}>{country.name.common}</li>;
        })}
      </ul>
      <div className="countries-container">{displayedCountries()}</div>
    </div>
  );
};

export default Countries;
