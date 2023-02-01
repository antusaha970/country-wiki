import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const CountryDetails = () => {
    const {name} = useParams();
    const [country, setCountry] = useState({});
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/name/${name}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data[0]));
    },[])
    const countryName = country.name.common;
    const flag = country.flags.png;


    return (
        <div>
            <div className="container text-center">
                <img src={flag} alt="" />
                <h3>{countryName}</h3>
            </div>
        </div>
    );
};

export default CountryDetails;