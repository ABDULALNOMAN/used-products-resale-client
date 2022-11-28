import React from 'react';
import aboutImg from '../../../assets/nHYWTGvx2121UCI0SePNsJlUdJ62VNyQ.jpg'

const About = () => {
    return (
        <div className='bg-teal-800 p-3 my-8'>
            <div className='container mx-auto grid md:grid-cols-3 grid-cols-1'>
                <div className='col-span-1'>
                    <img  className='h-full' src={aboutImg} alt="" />
                </div>
                <div className='col-span-2 ml-4'>
                    <p className='text-lg'>gsmarea is populer movile exchange application best movile phone price only gsmarea.many people use is because of the good user exprrience</p>
                </div>
            </div>
        </div>
    );
};

export default About;