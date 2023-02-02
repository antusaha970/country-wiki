import React from 'react';

const NoMatch = () => {
    return (
        <div className='text-center'>
            <h1>Sorry Country Not Found 404!!!!</h1>
            <h2>Please Go back and search again....</h2>
            <a href="/"><button className='btn btn-danger'>Go Back</button></a>
        </div>
    );
};

export default NoMatch;