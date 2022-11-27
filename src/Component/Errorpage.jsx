import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold'>404</h1>
                <p>go to <Link className="text-blue underline" to="/">home page</Link></p>
            </div>
        </div>
    );
};

export default Errorpage;