import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ScrollButton from "../components/ScrollButton";
import  CollegeSelect from "../components/CollegeSelect"


const College = () => {

      
    return (
    <>
        <Navbar/>
        <CollegeSelect/>
        <ScrollButton/>
        <Footer />

    </>);
}

export default College;
