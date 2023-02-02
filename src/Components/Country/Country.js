import React from 'react';
import { Link } from 'react-router-dom';
import '../Country/Country.css';



const Country = (props) => {
    const customStyle = {
        margin: '20px',
        borderBottom: '1px solid black',
    }
    const name = props.country.name.common;
    const flag = props.country.flags.png;

    return (
        <>
            <div className="container text-center" style={customStyle}>
                <div className="row">
                    <div className="col-md-12">
                        <img src={flag} alt="" className='img-area' />
                        <h2>{name}</h2>
                        <Link to={`country/${name}`}><button className='btn btn-success btn-sm mb-3'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Country;