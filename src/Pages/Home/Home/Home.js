import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCards/InfoCards';
import MakApoitment from '../MakApoitment/MakApoitment';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Testing from '../Testing/Testing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Testing></Testing>
            <MakApoitment></MakApoitment>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;