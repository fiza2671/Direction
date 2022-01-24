import React, { useState } from "react";
import { Link } from "react-router-dom";
import serviceapi from "../API/serviceApi.js";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container" id="services" >
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
           Explore Our Services
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info ,link} = curElem;
              return (
                <>
                   <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}> <Link to={link}> 
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </Link></div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
