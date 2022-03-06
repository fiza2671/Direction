import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import CourseSelect from '../components/CourseSelect';
import Footer from '../components/Footer';
import ScrollButton from "../components/ScrollButton";

const Course = () => {
  return (
    <>
    <Navbar/>
    <Banner title="Explore"
    subtitle="different courses"
    desc="Have a sneak peak through the wide range of courses available after school..."
    img="./images/course.png"
    />
    <CourseSelect />
    <ScrollButton />
    <Footer />
    </>);
};

export default Course;
