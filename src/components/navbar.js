import React, { useState ,useContext} from "react";
import { Link ,useNavigate} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { AuthContext } from "../store/Context";
import { FirebaseContext } from "../store/Context";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const navigate = useNavigate();

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
                <span>
                  {user ? 
                  <span></span>
                  :
                  <Link  to="/signup">
                    <button class="btn  btn-style" type="submit">
                     Sign Up
                    </button>
                  </Link> 
                  }
                </span>

                <span>
                  {user 
                  ?
                  <Dropdown >
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="btn  btn-style">
                    {user.displayName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu >
                    <Dropdown.Item className="logoutBtn" 
                    onClick={ () =>{
                                      firebase.auth().signOut();
                                      navigate("/");
                                    }}> 
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                   :
                   <Link  to="/login" >
                     <button class="btn  btn-style btn-style-border" type="submit">
                      Log In
                      </button>
                    </Link>
                  }
                </span>
                
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
