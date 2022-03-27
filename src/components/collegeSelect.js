import React, { useState } from "react";
import Select from 'react-select';
import {db} from "../firebase/config";
import collegeapi from "../API/collegeApi";

const streams = [
    { label: "Arts", value: "arts" },
    { label: "Science", value: "science" },
  ];

  const location = [
    { label: "Delhi", value: "delhi" },
    { label: "Kerala", value: "kerala" },
    { label: "Chennai", value: "chennai" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Bangalore", value: "bangalore" },
    { label: "Pune", value: "pune" },
  ];

const CollegeSelect = () => {
  
    const [stream, setStream] = useState([]);
    const [program, setProgram] = useState([]);
    const [place,setPlace] = useState([]);
    const [table, setTable] = useState([]);
    const [programs, setPrograms] = useState([]);
  

    const loadCollege = (str, pr , loc) => {
    let arr = []
              db.collection(
        `college/streams/${str["value"]}/${str["value"]}_doc/${pr["value"]}/${pr["value"]}/${loc["value"]}`
              )
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr.push(
              {
                CollegeName: doc.data().name,
                Rating: doc.data().rating,
                Website: doc.data().site,
              })
            setTable([...arr]);
          });
        }) .catch ((err) => {
          console('err', err)
        })
};


 
  return (
  <div>
    <div className="work-container ">

      <div className="select-div">
      <label className="label">Stream</label>
      <Select
        options={streams}
        value={stream}
        labelledBy="Select"
        className="multiselect"
        onChange = {(value) => {
          setStream(value);
          setPrograms(collegeapi[value['value']]);
          setProgram([]) ;
          setPlace([]);        
        }}
        />
      </div>
      

      <div className="select-div">
      <label className="label">Program</label>
     <Select     
        options={programs}
        value={program}
        labelledBy="Select"
        className="multiselect"
        onChange = {(value) => {
          setProgram(value);
          setPlace([])
        }}
        />
        </div> 
     
      <div className="select-div">
      <label className="label">Location</label>
      <   Select
        options={location}
        value={place}
        labelledBy="Select"
        className="multiselect"
        onChange = {(value) => {
          setPlace(value);
          loadCollege(stream, program ,value);
        }}
        />
        </div>

    </div>

      
    <section className="service-main-container" id="services" >
        <div className="container service-container">
          <div className="row table_div">
            <table class="tables">
              <thead>
                <tr className="main-hero-para col-heading">
                  <th>College Name</th>
                  <th>Rating*</th>
                  <th>College Site</th>
                </tr>
              </thead>
              <tbody>
              {table.map((item, index) => {
                return (
                <tr className="table-row">
                  <td >{item.CollegeName}</td>
                  <td >{item.Rating}</td>
                  {item.Website?<td><a href={item.Website} target="_blank"><span  className="link">Know More</span></a></td>:<td></td>}
                  </tr>);
             
              })}
              <span className="form-alert">*College ratings are based on user ratings available on the internet</span>

              </tbody>
            </table>


          </div>
        </div>
      </section>

  </div>
  
  );
}

export default CollegeSelect

