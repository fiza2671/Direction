import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import {db} from "../firebase/config";
import { Container } from "react-bootstrap";

const options = [
  { label: "UG", value: "ugcourse" },
  { label: "PG", value: "pgcourse" },
];

const streams = [
  { label: "Arts", value: "arts" },
  { label: "Science", value: "science" },
];


const CourseSelect = () => {

  const [selected, setSelected] = useState([]);
  const [stream, setStream] = useState([]);
  const [table, setTable] = useState([]);
  
 
  const loadCourses = (sel, str) => {
    let arr = []
    sel.forEach((selectedItem) => {
      str.forEach((streamItem) => {
         db.collection(
          `${selectedItem["value"]}/${selectedItem["value"]}_document/stream/stream_document/${streamItem["value"]}`
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
          }) .catch ((err) => {
            console('err', err)
          })
      });
    });
  };
 
  return (<div>
      <MultiSelect
        options={options}
        value={selected}
        labelledBy="Select"
        onChange = {(value) => {
          setSelected(value);
          setStream([]);
        }}
      />
      <MultiSelect
        options={streams}
        value={stream}
        labelledBy="Select"
        onChange = {(value) => {
          setStream(value);
          loadCourses(selected, value);
        }}
      />

      
     <section className="service-main-container" id="services" >
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
           explore
          </h1>
          <div className="row">
            
          {table.map((user, index) => {
                return (
                  <Container key={index}>
                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                      <br />
                      <h2 className="sub-heading">{user.Program}</h2>
                      <p className="main-hero-para">{user.Eligibility}</p>
                    </div>
                  </Container>
                );
              })}
          </div>
        </div>
      </section>

  </div>
  );
};

export default CourseSelect;