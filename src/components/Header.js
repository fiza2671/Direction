import React from "react";

const Header = () => {
  return (
    <>
      <header id="home">
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                The right path <br /> towards your career.
              </h1>
              <p className="main-hero-para">
              Are you still figuring out what next after school ?
              Well, then you are here at the right spot.
              </p>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero1.png"
                alt="heroimg"
                className="img-fluid"
              />
              
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
