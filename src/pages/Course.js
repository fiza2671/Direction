import React from 'react';
import Navbar from '../components/navbar';
import CourseSelect from '../components/CourseSelect';
import Footer from '../components/Footer';
import ScrollButton from "../components/ScrollButton";

const Course = () => {
  return (
    <>
    <Navbar/>
    <CourseSelect />
    <ScrollButton />
    <Footer />
    </>);
};

export default Course;
