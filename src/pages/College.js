import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CollegeSelect from '../components/collegeSelect';
import ScrollButton from "../components/ScrollButton";



const College = () => {

      
    return (
    <>
        <Navbar/>
        <Banner
        title="Discover"
        subtitle="various colleges"
        desc="Identify leading institutions from various parts of the country offering a particular course"
        img="./images/college.png"
        />
        <CollegeSelect/>
        <ScrollButton/>
        <Footer />

    </>);
}

export default College;
