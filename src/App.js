import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Course from "./pages/Course";
import College from "./pages/College";
import Scholarship from "./pages/Scholarship";
import Exam from "./pages/Exam";
import Mentor from "./pages/Mentor";
import Job from "./pages/Job";
import Error from "./pages/Error";
// import Auth from "./pages/Auth";
// import Login from "./components/Login";
// import Signup from "./components/Signup";



const App = () => {
  return (
    <>
      <Routes>
      
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Course" element={<Course/>}/>
        <Route path="/College" element={<College/>}/>
        <Route path="/Scholarship" element={<Scholarship/>}/>
        <Route path="/Exam" element={<Exam/>}/>
        <Route path="/Job" element={<Job/>}/>
        <Route path="/Mentor" element={<Mentor/>}/>
        
        {/* <Route path="/Auth" element={<Auth/>}/> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}

        <Route element={<Error/>}/>
      </Routes>
    </>
  );
};

export default App;

