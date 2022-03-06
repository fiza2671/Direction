import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Select from 'react-select';
import {db} from "../firebase/config";
import { Container } from "react-bootstrap";

const streams = [
    { label: "Arts", value: "arts" },
    { label: "Science", value: "science" },
  ];
  
  const science = [
    { label: "Maths", value: "maths" },
    { label: "Physics", value: "physics" },
  ];

  const arts = [
    { label: "English", value: "english" },
    { label: "History", value: "history" },
  ];
  
  const location = [
    { label: "Delhi", value: "delhi" },
    { label: "Kerala", value: "kerala" },
  ]

const CollegeSelect = () => {
  
    const [stream, setStream] = useState([]);
    const [program, setProgram] = useState([]);
    const [place,setPlace] = useState([]);
    const [table, setTable] = useState([]);
  
 
  const loadCollege = (str, pr , loc) => {
    let arr = []
    str.forEach((selectedStream) => {
        pr.forEach((streamItem) => {
            loc.forEach((location) => {
                db.collection(
          `${selectedStream["value"]}/${selectedStream["value"]}_doc/college/college_doc/${streamItem["value"]}/${streamItem["value"]}/${location["value"]}`
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
      });
    });
    });
  };
 
  return (<div>
      <Select
        options={streams}
        value={stream}
        labelledBy="Select"
        onChange = {(value) => {
          setStream(value);  
        }}
      />
     <MultiSelect
        options={science}
        value={program}
        labelledBy="Select"
        onChange = {(value) => {
          setProgram(value);
        }}
        />
      
      <MultiSelect
        options={location}
        value={place}
        labelledBy="Select"
        onChange = {(value) => {
          setPlace(value);
          loadCollege(stream, program ,value);
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
                      <h2 className="sub-heading">{user.CollegeName}</h2>
                      <p className="main-hero-para">{user.Rating}</p>
                    </div>
                  </Container>
                );
              })}
          </div>
        </div>
      </section>

  </div>
  
  );
}

export default CollegeSelect