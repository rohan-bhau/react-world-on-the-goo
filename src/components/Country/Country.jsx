import React, { useState } from 'react'

const Country = ({ country, handleVisitedCountries }) => {
//   console.log(handleVisitedCountries);
  const [visited, setVisited] = useState(false);

  const handleClicked = () => {
    // if (visited == false) {
    //    setVisited(true)
    // } else {
    //     setVisited(false)
    // }
    // console.log(visited);

      setVisited(!visited);
      handleVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common} </h2>
      <p>Capital: {country.capital.capital[0]}</p>
      <p>Region: {country.region.region}</p>
      <p>Population: {country.population.population}</p>
      {/* <p>Language: {country.languages.languages}</p> */}
      <button onClick={handleClicked} className="counter">
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country
