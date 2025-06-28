import React from "react";
import Hero from "../../Components/Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import { Toaster } from "react-hot-toast";
import Skills from "../Skills/Skills";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Tahreem</title>
      </Helmet>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Home;
