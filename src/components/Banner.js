import React from 'react'

const Banner = (props) => {
  return (
    <header className='banner'>
        <section className="container banner-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                {props.title}<br/>
                {props.subtitle}
              </h1>
              <p className="main-hero-para">
              {props.desc}
              </p>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images banner-img">
              <img
                src={props.img}
                alt="heroimg"
                className="img-fluid"
              />
              
            </div>
          </div>
        </section>
      </header>
  )
}

export default Banner