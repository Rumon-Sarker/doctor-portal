import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const MakApoitment = () => {
    return (
        <div className="hero mt-32 bg-base-200" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="max-w-sm -mt-24 hidden md:block  lg:w-1/2 rounded-lg shadow-2xl" alt='small-Docotor ' />
                <div>
                    <h1 className="text-3xl text-green-300 font-bold">Appointment</h1>
                    <h2 className='text-4xl'>Make AppointMent Today</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default MakApoitment;