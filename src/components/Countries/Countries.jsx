import React, { use, useState } from 'react'
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

  const [visitedCountries, setVisitedCountries] = useState([])

  const handleVisitedCountries = (country)=>{
    console.log('handle visited countries clicked', country);
    const newVisitedCountries = [...visitedCountries, countries]
    setVisitedCountries(newVisitedCountries)
    
  }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries);
    
    return (
      <div>
        <div className='top-info'>
          <h1>In the countries: {countries.length}</h1>
          <h1>Number of countries visited: { visitedCountries.length}</h1>
        </div>
        <div className="countryContainer">
          {countries.map((country) => (
            <Country
              handleVisitedCountries={handleVisitedCountries}
              key={country.cca3.cca3}
              country={country}
            >

            </Country>
          ))}
        </div>
      </div>
    );
};

export default Countries
