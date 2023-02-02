import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
    const { name } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
        fetch(url)
            .then(response => response.json())
            .then(data => setCountry(data[0]));
    }, [])


    const countryName = country.name?.official;
    const flag = country.flags?.png;
    let lang;
    if (country.languages !== undefined) {
        lang = Object.values(country.languages);
    }
    let currency;
    if (country.currencies !== undefined) {
        currency = Object.keys(country.currencies);
    }

    return (
        <div>
            <div className="container text-center mb-4">
                <img src={flag} alt="" className='img-area' />
                <h1>{countryName}</h1>
                {country.continents &&
                    <p>Continents : {country.continents}</p>
                }
                {country.capital && <p>Capital : {country.capital[0]}</p>}
                {
                    country.population && <p>Population : {country.population}</p>
                }

                {
                    country.area && <p>Area : {country.area}</p>
                }
                {
                    country.timezones && <p>Timezone : {country.timezones[0]}</p>
                }
                {
                    lang && <p>Languages : {lang.map(lg => <span>{lg}, </span>)}</p>
                }
                {
                    country.currencies && <p>Currency : {country.currencies[currency].symbol}  {country.currencies[currency].name}</p>
                }
                {
                    country.maps && <a href={country.maps?.googleMaps} target="_blank"><button className='btn btn-success'>View map on google</button></a>
                }
                <br />
                <br />
                <a href="/"><button className='btn btn-danger'>Go Back</button></a>

            </div>
        </div>
    );
};

export default CountryDetails;