import React from 'react';
import Country from '../Country/Country';

const AllCountrys = (props) => {
    // console.log(props.countrys);
    const allCountry = props.countrys;
    return (
        <div>
            {
                allCountry?.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default AllCountrys;