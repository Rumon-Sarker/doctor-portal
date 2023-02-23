import React from 'react';

const Review = ({ review }) => {
    const { name, imges, discription } = review;
    return (
        <div className={`card p-5 mt-4 text-white md:card-side bg-base-200 shadow-xl`} >
            <figure><img src={imges} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>
            </div>
        </div>
    );
};

export default Review;