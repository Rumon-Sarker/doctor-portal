import React from 'react';

const InfoCard = ({ card }) => {
    const { icon, name, discription, bgColor } = card
    return (
        <div className={`card p-5 mt-4 text-white md:card-side bg-base-100 shadow-xl ${bgColor}`} >
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>
            </div>
        </div>
    );
};

export default InfoCard;