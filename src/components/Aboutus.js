import React from "react";

const Aboutus = () => {
  return (
    <>
      <section className="common-section our-services" id="about">
        <div className="container mb-5">
          <div className="row">
            
            <div className="col-12 col-lg-6 text-center our-service-leftside-img">
              <img src="./images/hero3.png" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-6 our-services-list">
              <div className="mini-title ">
                ABOUT US
              </div>
              <br/>
              <h1 className="main-heading display-3">hakuna matata !!</h1>

              <p className="main-hero-para about2">Yes, you heard it right.No worries dear friend.
              Team Direction is the one stop solution for all
              your queries regarding what next after school.We provide you with all the necessary details you require
              after school and thereby direct you towards the right path.</p><br/>
              <p className="main-hero-para about3">So hurry up.Checkout our services.</p>

              <br />
              <a href="#services"><button className="btn-style btn-style-border">Learn more</button></a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Aboutus;
