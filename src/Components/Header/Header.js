import React from 'react';

const HeaderText = () => {
    const customStyle = {
        margin: '30px 0',
        borderBottom: '2px solid lightgrey',
        padding: '10px 0'
    }
    return (
        <div style={customStyle}>
            <h1 className='text-center'>Country WikiPedia</h1>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" className='form-control' placeholder='Search any country' />
                    </div>
                    <div className="col-md-4">
                        <button className='btn btn-success d-block w-100'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderText;