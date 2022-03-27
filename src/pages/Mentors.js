import React from 'react';
import Navbar from '../components/navbar';

import Banner from '../components/Banner';
import Mentor from '../components/Mentor';
import Footer from '../components/Footer';
import ScrollButton from "../components/ScrollButton";

const Mentors = () => {
  return (
  <>
  <Navbar/>
  <Banner title="Connect"
    subtitle="with our mentors"
    desc="Book a session to video conference with our mentors and get your doubts cleared..."
    img="./images/mentor.png"
    />
  <Mentor/>
  <ScrollButton/>
  <Footer />
  </>);
};

export default Mentors;
