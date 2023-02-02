import React from 'react';
import { useHistory } from "react-router-dom";

const HeaderText = () => {
    let history = useHistory();
    const customStyle = {
        margin: '30px 0',
        borderBottom: '2px solid lightgrey',
        padding: '10px 0'
    }
    const handleClick = () => {

    }

    return (
        <div style={customStyle}>
            <h1 className='text-center'>Country WikiPedia</h1>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" className='form-control' placeholder='Search any country' id='inputBox' />
                    </div>
                    <div className="col-md-4">
                        <button id='searchBtn' className='btn btn-success d-block w-100' onClick={() => {
                            const text = document.getElementById('inputBox').value;
                            history.push(`country/${text}`);
                            document.getElementById('searchBtn').setAttribute('disabled', true);
                        }}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default HeaderText;