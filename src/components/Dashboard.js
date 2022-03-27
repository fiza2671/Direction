import React, { useState,useContext } from "react";
import Select from 'react-select';
import {db} from "../firebase/config";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/Context";
import { FirebaseContext } from "../store/Context";


const options = [
  { label: "My exams", value: "exam" },
  { label: "My scholarsips", value: "scholarship" },
];

const Dashboard = () => {

 const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const [selected, setSelected] = useState([]);
  const [table, setTable] = useState([]);
  const [tables, setTables] = useState([]);
  const [dataExam,setDataExam] =useState([]);
  const [data,setData] =useState([]);
  let arr = "";
  let array=[]
 
    const loadExam = () => {
      db.collection('user_auth')
      .get()
      .then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {

          if(doc.id==user.uid)
          {

            arr=doc.data().exam
            setTable([...arr]);
          }
        });
      }).catch ((err) => {
      })

      table.map((user, index) => {
             
        db.collection(user.path).where("name","==",user.name).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {

            array.push({
              application:doc.data().dates.application,
              exam:doc.data().dates.examination,
              result:doc.data().dates.result,
              name:doc.data().name
            })
            
            setDataExam([...array]);
            console.log(dataExam)
          });
        }).catch ((err) => {
        })
        })
  };

  const loadScholarship = () => {
    db.collection('user_auth')
    .get()
    .then((querySnapshot) => {
      
      querySnapshot.forEach((doc) => {

        if(doc.id==user.uid)
        {

          arr=doc.data().scholarship
          setTables([...arr]);
        }
      });
    }).catch ((err) => {
    })

    tables.map((user, index) => {
           
      db.collection(user.path).where("name","==",user.name).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

          array.push({
            fresh:doc.data().dates.fresh,
            renewal:doc.data().dates.renewal,
            Name:doc.data().name
          })
          
          setData([...array]);
          console.log(data)
        });
      }).catch ((err) => {
      })
      })
};


  return (
  <div>
    <div className="work-container ">

      <div className="select-div">
      <label className="label">Explore your <br/>choices</label>
      <Select
        options={options}
        value={selected}
        labelledBy="Select"
        className="multiselect"
        onChange = {(value) => {
          setSelected(value);
          console.log(selected['value']);
          if(selected['value'] == 'exam'){
            loadExam();
          
          }
          else if(selected['value'] == 'scholarship'){
            loadScholarship();
          
          }
        } 
      }/>
       </div>
      </div>
    
{
  selected['value'] == 'exam' ?

      <section className="service-main-container" id="services" >
      <div className="container service-container">
        <div className="row table_div">
          <table class="tables">
            <thead>
              <tr className="main-hero-para col-heading">
                <th scope="col">Name</th>
                <th scope="col">Application</th>
                <th scope="col">Examination</th>
                <th scope="col">Result</th>
              </tr>
            </thead>

            <tbody>
            {dataExam.map((item, index) => {   
              return (
                
              <tr className="table-row">
                <td >{item.name}</td>
                <td >{item.application}</td>
                <td>{item.exam}</td>
               <td>{item.result}</td>

              
              </tr>);
            })}

            </tbody>
          </table>


        </div>
      </div>
    </section>
:<span></span>
          }

  {selected['value'] == 'scholarship'
   ?
    <section className="service-main-container" id="services" >
      <div className="container service-container">
        <div className="row table_div">
          <table class="tables">
            <thead>
              <tr className="main-hero-para col-heading">
                <th scope="col">Name</th>
                <th scope="col">Fresh</th>
                <th scope="col">Renewal</th>
              </tr>
            </thead>

            <tbody>
            {data.map((item, index) => {   
              return (
                
              <tr className="table-row">
                <td >{item.Name}</td>
                <td >{item.fresh}</td>
                <td>{item.renewal}</td>
              
              </tr>);
            })}

            </tbody>
          </table>


        </div>
      </div>
    </section>
     :<span></span>}
      </div>
     
    )
 
}

export default Dashboard