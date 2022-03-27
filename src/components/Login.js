import React, { useState ,useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { FirebaseContext } from "../store/Context";
import { GoogleAuthProvider} from 'firebase/auth';



const Login = () => {

  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {firebase} = useContext(FirebaseContext);
  const googleAuthProvider = new GoogleAuthProvider();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then( () => {
      navigate("/");
    }).catch( (err) => {
      alert(err.message);
    })
    
    // setError("");
    // try {
    //   // await logIn(email, password);
    //   navigate("/home");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    firebase.auth().signInWithPopup( googleAuthProvider ).then((result) =>{
        firebase.firestore().collection("user_auth").doc(result.user.uid).set({
          id : result.user.uid,
        },
          { merge: true }
        ).then( () => {
            navigate("/");
        
      })
    }).catch( (err) => {
      alert(err.message);
    })


    // try {
    //   // await googleSignIn();
    //   navigate("/home");
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <>
  <header id="home" className="header1">
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
            <Container style={{ width: "400px" }}>
            <Row>
              <Col>
                <div className="p-4 box">
              
                  <h2 className="mb-3 text-center">Login</h2>
            
                <Form onSubmit={handleSubmit} >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    className="form-input"
                      type="email"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                    className="form-input"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 formButton">
                    <Button  className="signup-btn mt-4" type="Submit">
                      Log In
                    </Button>
                  </div>
                </Form>
                <hr />
                <div>
                  <GoogleButton
                    className="g-btn"
                    type="dark"
                    onClick={handleGoogleSignIn}
                  />
                </div>
                </div>
              <div className="p-4 box mt-3 text-center frm-txt">
                Don't have an account? <Link to="/signup" className="link">Sign up</Link>
              </div>
          </Col>
        </Row>
      </Container> 
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images text-center">
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

export default Login;