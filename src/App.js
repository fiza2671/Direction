import React ,{useContext,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import {AuthContext , FirebaseContext} from "./store/Context"

import Login from "./components/Login";
import Signup from "./components/Signup";

import Home from "./pages/Home";
import Course from "./pages/Course";
import College from "./pages/College";
import Scholarship from "./pages/Scholarship";
import Exam from "./pages/Exam";
import Mentors from "./pages/Mentors";
import Job from "./pages/Job";
import Error from "./pages/Error";



const App = () => {

  const {setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      setUser(user);
    })
  })
  

  return (
    <>
      <Routes>
      
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Course" element={<Course/>}/>
        <Route path="/College" element={<College/>}/>
        <Route path="/Scholarship" element={<Scholarship/>}/>
        <Route path="/Exam" element={<Exam/>}/>
        <Route path="/Job" element={<Job/>}/>
        <Route path="/Mentor" element={<Mentors/>}/>
        <Route element={<Error/>}/>
      </Routes>
    </>
  );
};

export default App;








