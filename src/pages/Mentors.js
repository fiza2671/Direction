import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/Header';
import Mentor from '../components/Mentor';
import Footer from '../components/Footer';
import ScrollButton from "../components/ScrollButton";

const Mentors = () => {
  return (
  <>
  <Navbar/>

  <Mentor/>
  <ScrollButton/>
  <Footer />
  </>);
};

export default Mentors;
