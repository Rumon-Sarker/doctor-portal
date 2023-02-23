import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';
import qute from '../../../assets/icons/quote.svg';

const Reviews = () => {
    const reviesData = [
        {
            id: 1,
            name: "Rumon Sarker",
            imges: people1,
            discription: 'Good job ,You are a best programmer.So i am very happy.',
        },
        {
            id: 2,
            name: "Hridoy Hasan",
            imges: people2,
            discription: 'Good job ,You are a best programmer.So i am very happy.',
        },
        {
            id: 3,
            name: "Shanto",
            imges: people3,
            discription: 'Good job ,You are a best programmer.So i am very happy.'
        },
    ];
    return (
        <section className='mt-24' >
            <div>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-bold text-2xl text-success'>Testimonil</p>
                        <h2 className='text-3xl'>What Our Patients Says</h2>
                    </div>

                    <figure>
                        <img className='w-24 lg:w-48' src={qute} alt="" />

                    </figure>


                </div>
                <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviesData.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }

                </div>

            </div>
        </section>
    );
};

export default Reviews;