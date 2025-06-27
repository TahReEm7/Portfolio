import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../../Components/Education/Education';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;