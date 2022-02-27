import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import CollegeSelect from '../components/collegeSelect';
import ScrollButton from "../components/ScrollButton";



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
