import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ExamSelect from "../components/ExamSelect";
import ScrollButton from "../components/ScrollButton";

const Exam = () => {
  return (
    <>
    <Navbar/>
    <Banner title="Explore"
    subtitle="various examinations"
    desc="Find various examinations across the country for which you can appear for...."
    img="./images/exam.png"
    />
    <ExamSelect/>
    <ScrollButton/>
    <Footer />
    </>);
};

export default Exam;
