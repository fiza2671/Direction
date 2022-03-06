import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import JobSelect from "../components/JobSelect";
import ScrollButton from "../components/ScrollButton";

const Job = () => {
  return  (<>
  <Navbar/>
  <JobSelect/>
  <ScrollButton/>
  <Footer />
  </>);
};

export default Job;
