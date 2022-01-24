import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg ">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <Link className="navbar-brand" to="/">Direction</Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                 <Link to="/" class="nav-link active " aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                  <NavLink to="/#about" className={"nav-link"}>About</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/#services"  className={"nav-link"}>Services</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/#contact" className={"nav-link"}>Contact</NavLink>               
                </li>
              </ul>

              <form class="d-flex">
                <button class="btn  btn-style" type="submit">
                  <Link  to="/signup">
                    Sign Up
                    </Link>
                </button>
                <button class="btn  btn-style btn-style-border" type="submit">
                <Link  to="/login" >Log in</Link>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
