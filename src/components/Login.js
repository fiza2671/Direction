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
        firebase.firestore().collection("users").add({
          id : result.user.uid,
          username : user
        }).then( () => {
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
    <body className="formBody">
   
     <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <div className="p-4 box">
        
          <h2 className="mb-3 text-center">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2 formButton">
              <Button variant="primary" type="Submit">
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
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
        </Col>
      </Row>
    </Container>    
  </body>
  </>
  );
};

export default Login;