import React from 'react';

const Banner = () => {
    const serial = <div
        className="flex justify-center w-full py-2 gap-2 absolute bottom-0 bg-red-600">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
    return (
        <div className='relative'>
            <div className="carousel w-full h-[80vh]">
                <div id="item1" className="carousel-item  w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    {/* <div>
                        {serial}
                    </div> */}
                </div> 
                <div id="item2" className="carousel-item  w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    {/* <div>
                        {serial}
                    </div> */}
                </div> 
                <div id="item3" className="carousel-item  w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    {/* <div>
                        {serial}
                    </div> */}
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    {/* <div>
                        {serial}
                    </div> */}
                </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;