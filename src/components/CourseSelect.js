import React, { useState,useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import {db} from "../firebase/config";
import {collection, getDocs} from "firebase/firestore";

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
 

  useEffect(() => {
     try{
       for(let i=0;i<selected.length;i++)
       {
         for(let j=0;j<stream.length;j++)
         {
            db.collection(
            `${selected[i]['value']}/${selected[i]['value']}_document/stream/stream_document/${stream[j]["value"]}`,
            )
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data().course}`)
                setTable([]);
                setTable([...table,{'Program':doc.data().course,"Eligibility":doc.data().eligibility, "Duration(years)":doc.data.duration,"Fee" :doc.data().fee}]);
                
                // console.log(table);
              })
              
            })
        }
      }
      }catch(err){
        
      }
    
  });

  return (<div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      <MultiSelect
        options={streams}
        value={stream}
        onChange={setStream}
        labelledBy="Select"
      />

      
     {/* <section className="service-main-container" id="services" >
        <div className="container service-container">

          <h1 className="main-heading text-center fw-bold">
           explore
          </h1>

          <div className="row">

            {table.map((user) => {
              return (
                <>     
                   <div
                   className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                   > 
                   <br/>
                    <h2 className="sub-heading">{user.Program}</h2>
                    <p className="main-hero-para">{user.Eligibility}</p>
                    
                    </div>
                </>
              );
            })}
          </div>
        </div>
      </section> */}

  </div>);
};

export default CourseSelect;
