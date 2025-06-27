import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Education></Education>
            <Contact></Contact>
             <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default Home;