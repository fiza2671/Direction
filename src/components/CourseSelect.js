import React, { useState } from "react";
import Select from 'react-select';
import {db} from "../firebase/config";
import courseapi from "../API/courseApi";

const options = [
  { label: "UG", value: "ugcourse" },
  { label: "PG", value: "pgcourse" },
];

const CourseSelect = () => {

  const [selected, setSelected] = useState([]);
  const [stream, setStream] = useState([]);
  const [table, setTable] = useState([]);
  
  const loadCourses = (sel, str) => {
    let arr = []
   
         db.collection(
          `${sel["value"]}/${sel["value"]}_document/stream/stream_document/${str["value"]}`
        )
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              arr.push(
                {
                  Program: doc.data().course,
                  Eligibility: doc.data().eligibility,
                  Duration: doc.data().duration,
                  Fee: doc.data().fee,
                })
              setTable([...arr]);
            });
          }).catch ((err) => {
            <div>No Results Found</div>
          })
     
  };
 
  return (<div>
    <div className="work-container ">
      <div className="select-div">
      <label className="label">Course</label>
      <Select
        options={options}
        value={selected}
        labelledBy="Select"
        className="multiselect"
        onChange = {(value) => {
          setSelected(value);
          setStream([]);
        } 
      }
      />
      </div>

      <div className="select-div">
      <label className="label">Stream</label>
      <Select
        options={courseapi}
        value={stream}
        className="multiselect"
        onChange = {(value) => {
          setStream(value);
          loadCourses(selected, value);
        }}
      />
      </div>
      
    </div>
      
     <section className="service-main-container" id="services" >
        <div className="container service-container">
          <div className="row table_div">
            <table className="tables">
              <thead>
                <tr className="main-hero-para col-heading">
                  <th>Program Name</th>
                  <th>Eligibility</th>
                  <th>Duration (years)</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
              {table.map((user, index) => {
                return (
                <tr className="table-row">
                  <td >{user.Program}</td>
                  <td className="td">{user.Eligibility}</td>
                  <td>{user.Duration}</td>
                  <td>{user.Fee}</td>
                </tr>);
              })}

              </tbody>
            </table>


          </div>
        </div>
      </section>

  </div>
  );
};

export default CourseSelect;