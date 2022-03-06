import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ExamSelect from "../components/ExamSelect";
import ScrollButton from "../components/ScrollButton";

const Exam = () => {
  return (
    <>
    <Navbar/>
    <ExamSelect/>
    <ScrollButton/>
    <Footer />
    </>);
};

export default Exam;
