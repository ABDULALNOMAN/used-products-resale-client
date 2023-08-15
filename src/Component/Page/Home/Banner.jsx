import React from 'react';
import bannerimg from '../../../assets/smartphone.14bb354-removebg-preview (1).png'

const Banner = () => {
    
    return (
        <div className=''>
            <div className=' container mx-auto'>
                <div className='w-full h-[80vh] flex lg:flex-row flex-col justify-around items-center '>
                    <div className='lg:w-1/2 w-full '>
                        <h1 className='font-bold lg:text-6xl md:text-5xl text-5xl lg:mx-0 mx-3 lg:text-left text-center capitalize'>sell you smart phone gsmarea and quick cash</h1>
                        <div className="form-control lg:block hidden mt-4">
                            <div className="input-group ">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn btn-square bg-secondary hover:bg-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 lg:block hidden'>
                        <img className='' src={bannerimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default Banner;