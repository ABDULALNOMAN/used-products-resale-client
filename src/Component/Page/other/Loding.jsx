import React from 'react';

const Loding = () => {
    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <div className="radial-progress animate-spin text-amber-500" style={{"--value":70}}></div>
        </div>
    );
};

export default Loding;