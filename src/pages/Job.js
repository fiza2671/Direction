import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import JobSelect from "../components/JobSelect";
import ScrollButton from "../components/ScrollButton";

const Job = () => {
  return  (<>
  <Navbar/>
  <Banner title="Identify"
    subtitle="various job opportunities"
    desc="Find various career options which you can pursue after completing a particular course..."
    img="./images/job.png"
    />
  <JobSelect/>
  <ScrollButton/>
  <Footer />
  </>);
};

export default Job;
