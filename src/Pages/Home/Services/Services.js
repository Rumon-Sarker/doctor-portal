import React from 'react';

import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import cavity from '../../../assets/images/cavity.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Teeth Whitenig',
            img: fluoride,
            description: 'Do you Whitenig your teeth ? Yes Our Tem is fast working'
        },
        {
            id: 2,
            name: 'Cavity Feling',
            img: cavity,
            description: 'Do you Cavity Feling your teeth ? Yes Our Tem is fast working'
        },
        {
            id: 3,
            name: 'Fluoride Treatment',
            img: whitening,
            description: 'Do you Fluoride Treatment your teeth ? Yes Our Tem is fast working your teeth'
        },
    ];
    return (
        <div className='mt-24'>
            <div className='text-center'>
                <h3 className='text-success font-bold text-xl'>OUR SERVICES</h3>
                <h3 className='text-3xl'>Services We Provide</h3>

            </div>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)

                }


            </div>

        </div>
    );
};

export default Services;