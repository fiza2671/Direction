import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import Dashboard from "../components/Dashboard";
import Footer from '../components/Footer';



const User = () => {
  return (
      <>
    <Navbar/>
    <Banner
     title="Checkout"
     subtitle="your notifications"
     desc="Have a go through of scholarships and examinations that you have got yourself notified..."
     img="./images/notify.png"/>
    <Dashboard/>
    <Footer/>

    </>
  )
}

export default User