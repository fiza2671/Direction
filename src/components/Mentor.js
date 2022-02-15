import React, { useState ,useEffect} from "react";
import {db} from "../firebase/config";
import {collection, getDocs} from "firebase/firestore";
import { openPopupWidget } from "react-calendly";


const Mentor = () => {
    const [mentor,setMentor] = useState([]);
    const mentorRef = collection(db,"mentors");
    

    useEffect( () => {

      const getMentor = async () => {
        const data = await getDocs(mentorRef);
        setMentor(data.docs.map( (doc) =>({ ...doc.data(), id:doc.id})));
      };
      getMentor();
    }, [] );

    return (
  <>
     <section className="service-main-container" id="services" >
        <div className="container service-container">

          <h1 className="main-heading text-center fw-bold">
           Connect with our mentors
          </h1>

          <div className="row">

            {mentor.map((user) => {

            const url = user.url
            const onClick = () => openPopupWidget( { url: url, 
            text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true });
            
              return (
                <>     
                   <div
                   className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                   > 
                   <br/>
                    <h2 className="sub-heading">{user.Name}</h2>
                    <p className="main-hero-para">{user.Description}</p>
                    <button class="btn  btn-style btn-style-border" type="submit" onClick={onClick}>Book Now</button>
                    </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
 
  </>
    );
};

export default Mentor;
