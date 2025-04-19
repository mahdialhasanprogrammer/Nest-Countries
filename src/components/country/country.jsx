import "./country.css";
import React, { useState } from "react";
const Country = ({ country, markVisitedCountries }) => {
  const { name, flags, area } = country;
  const [visited, setVisited] = useState(false);

  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Area: {area}</p>
      <button type="button" onClick={() => markVisitedCountries(country)}>
        Mark countries
      </button>
      <button
        onClick={() => {
          setVisited(!visited);
        }}
        type="button"
      >
        {visited ? "Visited" : "Going On"}
      </button>
    </div>
  );
};

export default React.memo(Country);
