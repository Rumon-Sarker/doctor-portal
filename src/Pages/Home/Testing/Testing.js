import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Testing = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content gap-12 flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                <div>
                    <h1 className="text-4xl text-green-500 font-bold">Treatment</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Testing;