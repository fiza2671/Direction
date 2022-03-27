import React, { useState,useContext } from "react";
import Select from 'react-select';
import { arrayUnion, doc, updateDoc,setDoc } from "firebase/firestore"; 
import {db} from "../firebase/config";
import { AuthContext } from "../store/Context";
import { FirebaseContext } from "../store/Context";
import * as emailjs from "emailjs-com";

const options = [
  { label: "After 10th", value: "after_10th" },
  { label: "UG", value: "ug" },
  { label: "PG", value: "pg" },
];

const ScholarshipSelect = () => {

 const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const [selected, setSelected] = useState([]);
  // const [scholar, setScholar] = useState();
  const [table, setTable] = useState([]);
  let array=[]
 
    const loadScholarship = (sel) => {
      let arr = []
   
           db.collection(
            `scholarship/scholarship_doc/${sel["value"]}`
          )
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                // console.log(doc.ref.parent.path)
                arr.push(
                  {
                    Name: doc.data().name,
                    Award: doc.data().award,
                    Eligibility: doc.data().eligibility,
                    Site: doc.data().site,
                    Dates:doc.data().dates,
                    Id:doc.id,
                    Path:doc.ref.parent.path
                  })
                
                setTable([...arr]);
              });
            }).catch ((err) => {
              console('err', err)
            })
       
    };



  return (
  <div>
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
          loadScholarship(value);
        } 
      }
      />
      </div>
      </div>
{selected['value'] ?
      <section className="service-main-container" id="services" >
        <div className="container service-container">
          <div className="row table_div">
            <table class="tables">
              <thead>
                <tr className="main-hero-para col-heading">
                  <th scope="col">Name</th>
                  <th scope="col">Award</th>
                  <th scope="col">Eligibility</th>
                  <th scope="col">Details</th>
                  <th scope="col">Important Dates</th>
                </tr>
              </thead>

              <tbody>
              {table.map((item, index) => {   
                return (
                  
                <tr className="table-row">
                  <td >{item.Name}</td>
                  <td >{item.Award}</td>
                  <td>{item.Eligibility}</td>
                 {item.Site?<td><a href={item.Site} target="_blank"><span  className="link">Know More</span></a></td>:<td></td>}

                {item.Dates 
                ?   
                <td><button className="notify" onClick={()=>{
                
                var templateParams = {
                  user:user.displayName,
                  name: item.Name,
                  fresh:item.Dates.fresh,
                  renewal:item.Dates.renewal,
                  site:item.Site,
                  email:user.email,
              };
               
              emailjs.send('service_waug7bu', 'template_6os40t6', templateParams,"SNklDDoOScJcrecf9")
                  .then(function(response) {
                    alert("Please check your gmail inbox and user dashboard!!")
                     console.log('SUCCESS!', response.status, response.text);
                  }, function(error) {
                     console.log('FAILED...', error);
                  });


              array.push({
                name:item.Name,
                path:item.Path
              })

              let value=array[0];
              console.log(value)
                  const Ref = doc(db, "user_auth", `${user.uid}`);
                updateDoc(Ref, {
                     scholarship : arrayUnion(value)
                  });
                  

                }} >Notify Me</button></td> 
                
                : <span></span> 
                }  
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

export default ScholarshipSelect