import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Openig Time',
            discription: 'Open 07:00am - 08:00pm',
            icon: clock,
            bgColor: 'bg-primary'
        },
        {
            id: 2,
            name: 'Contuct Me',
            discription: 'Contact Time 07:00am - 08:00pm',
            icon: phone,
            bgColor: ' bg-secondary'
        },
        {
            id: 3,
            name: 'Our Locatio',
            discription: 'Our location addres ,',
            icon: marker,
            bgColor: 'bg-accent'
        },
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }

        </div>
    );
};

export default InfoCards;