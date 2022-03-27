import React, { useState } from "react";
import Select from 'react-select';
import {db} from "../firebase/config";



const options = [
  { label: "Computer Application", value: "ca" },
];


const JobSelect = () => {

  const [selected, setSelected] = useState([]);
  const [table, setTable] = useState([]);

  const loadJob = (sel) => {
    let arr = []
 
         db.collection(
          `job/job_doc/${sel["value"]}`
        )
          .get()
          .then((querySnapshot) => {
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
              arr.push(
                {
                  Name: doc.data().name,
                 Desc: doc.data().desc,
                 salary:doc.data().salary
                })
              
              setTable([...arr]);
            });
          }).catch ((err) => {
            console('err', err)
          })
     
  };


  return (<div>
    <div className="work-container ">
      <div className="select-div">
      <label className="label">Explore by <br/>category</label>
      <Select
        options={options}
        value={selected}
        labelledBy="Select"
        className="multiselect"
        onChange = {(value) => {
          setSelected(value);
          loadJob(value);
        } 
      }
      /></div>
      </div>

      {selected['value'] ?
      <section className="service-main-container" id="services" >
        <div className="container service-container">
          <div className="row table_div">
            <table class="tables">
              <thead>
                <tr className="main-hero-para col-heading">
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Salary</th>
                </tr>
              </thead>

              <tbody>
              {table.map((item, index) => {   
                return (
                  
                <tr className="table-row">
                  <td >{item.Name}</td>
                  <td >{item.Desc}</td>
                  <td>{item.salary}</td>
                </tr>);
              })}

              </tbody>
            </table>


          </div>
        </div>
      </section> : <span></span>}
    </div>  
    
    )
}

export default JobSelect