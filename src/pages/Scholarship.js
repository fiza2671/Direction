import React from 'react';
import Navbar from '../components/navbar';
import ScholarshipSelect from "../components/ScholarshipSelect";
import ScrollButton from "../components/ScrollButton";
import Footer from '../components/Footer';


const Scholarship = () => {
    return (
        <>
        <Navbar/>
        <ScholarshipSelect/>
        <ScrollButton/>
        <Footer />
        </>);
};

export default Scholarship;
