import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Aboutus from "../components/Aboutus";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";

const Home = () => {
  return (
    <>

      <Navbar />
      <Header />
      <Aboutus />
      <Services />
      <Contact />
      <ScrollButton/>
      <Footer />
    </>
  );
};

export default Home;
