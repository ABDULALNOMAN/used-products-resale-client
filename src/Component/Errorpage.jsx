import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    
    return (
        <div className='w-full h-[90vh] flex justify-center items-center'>
            <div className='text-center'>
                <div className='text-9xl font-bold flex items-center'><p>4</p><div className="radial-progress animate-spin text-gray-300" style={{"--value":70}}></div><p>4</p></div>
                <p className='text-2xl capitalize'>go to <Link className="text-sky-200 underline" to="/">home page</Link></p>
            </div>
        </div>
    );
};

export default Errorpage;