import React from 'react';
import Navbar from '../components/navbar';
import ScholarshipSelect from "../components/ScholarshipSelect";
import Banner from '../components/Banner';
import ScrollButton from "../components/ScrollButton";
import Footer from '../components/Footer';


const Scholarship = () => {
    return (
        <>
        <Navbar/>
        <Banner
        title="Discover"
        subtitle="various scholarships"
        desc="Have a know-how of scholarships which can be  availed at different levels of study...."
        img="./images/scholar.png"
        />
        <ScholarshipSelect/>
        <ScrollButton/>
        <Footer />
        </>);
};

export default Scholarship;
