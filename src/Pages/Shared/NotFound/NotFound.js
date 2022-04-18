
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>404 page not found <Link to ='/'>Go to Home</Link> </h2>
            
        </div>
    );
};

export default NotFound;