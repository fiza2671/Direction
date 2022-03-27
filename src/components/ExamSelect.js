import React, { useState,useContext } from "react";
import Select from 'react-select';
import {db} from "../firebase/config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore"; 
import { AuthContext } from "../store/Context";
import { FirebaseContext } from "../store/Context";
import * as emailjs from "emailjs-com";


const options = [
  { label: "Medical", value: "medicine" },
  { label: "Engineering", value: "engineering" },
  { label: "Law", value: "law" },
  { label: "Design", value: "design" },
  { label: "Paramedical", value: "paramedical" },
  { label: "Arts", value: "arts" },
  { label: "Architecture", value: "architecture" },
  { label: "Animation", value: "animation" },
  { label: "Commerce", value: "commerce" },

];


const ExamSelect = () => {

  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const [selected, setSelected] = useState([]);
  const [table, setTable] = useState([]);
  let array=[];

    const loadExam = (sel) => {
      
      let arr = []
           db.collection(
            `exam/exam_doc/${sel["value"]}`
          )
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                arr.push(
                  {
                    Name: doc.data().name,
                    Description: doc.data().desc,
                    Mode: doc.data().mode,
                    Details: doc.data().details,
                    Dates:doc.data().dates,
                    Path:doc.ref.parent.path
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
          loadExam(value);
        } 
      }
      />
      </div>
      </div>

      <section className="service-main-container" id="services" >
        <div className="container service-container">
          <div className="row table_div">
            <table class="tables">
              <thead>
                <tr className="main-hero-para col-heading">
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Details</th>
                  <th scope="col">Important Dates</th>
                </tr>
              </thead>
              <tbody>
              {table.map((item, index) => {
                
                return (
                <tr className="table-row">
                  <td >{item.Name}</td>
                  <td >{item.Description}</td>
                  <td>{item.Mode}</td>
                  {item.Details?<td><a href={item.Details} target="_blank"><span  className="link">Know More</span></a></td>:<td></td>}


                {item.Dates ? 
                
                <td><button className="notify" onClick={()=>{
                
                var templateParams = {
                  user:user.displayName,
                  name: item.Name,
                  application:item.Dates.application,
                  exam:item.Dates.examination,
                  result:item.Dates.result,
                  email:user.email,
              };
               
              emailjs.send('service_waug7bu', 'template_veaxggd', templateParams,"SNklDDoOScJcrecf9")
                  .then(function(response) {
                    alert("Please check your gmail inbox and user dashboard!!")
                     
                  }, function(error) {
                     
                  });   
              
              array.push({
                name:item.Name,
                path:item.Path
              })
              
              let value=array[0];
              
              const Ref = doc(db, "user_auth", `${user.uid}`);
              updateDoc(Ref, {
                 exam:arrayUnion(value)
              });

                }}   >Notify Me</button> </td> 
                
                : <span></span> 
                }  
                </tr>);
              })}

              </tbody>
            </table>


          </div>
        </div>
      </section>
    </div>  
    )
}

export default ExamSelect