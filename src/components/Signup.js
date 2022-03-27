import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { FirebaseContext } from "../store/Context";
// import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const { signUp } = useUserAuth();

  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) =>{
      result.user.updateProfile({displayName:user}).then( () =>{
        firebase.firestore().collection("user_auth").doc(result.user.uid).set({
          id : result.user.uid,
   
  
        }, { merge: true }).then( () => {
            navigate("/login");
        })
      })
    })
  }catch(err) {
    setError(err.message);
  }

  };

  return (
    <>
    <body className="formBody">
     <Container style={{ width: "400px" }}>
      <Row>
        <Col>
      <div className="p-4 box">

        <h2 className="mb-3 text-center">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          

        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
            className="form-input"
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
            className="form-input"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control
            className="form-input"
              type="password"
              placeholder="Password"
              onChange={(e) => 
                setPassword(e.target.value)
              }
            />
          </Form.Group>

          {password.length<8?
          <span className="form-alert">Password should have a minimum of 8 characters</span> 
          :
          <span></span>}

          <Form.Group className="mb-1 mt-3" controlId="formBasicPassword">
            <Form.Control
            className="form-input"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {password !== confirmPassword
          ?
          <span className="form-alert">Re-enter the same password</span>
            :<span></span>
          }

          <div className="d-grid gap-2">
            <Button  type="Submit" className="signup-btn mt-4">
              Sign up
            </Button>
          </div>

        </Form>
      </div>
      <div className="p-4 box mt-3 text-center frm-txt">
        Already have an account? <Link to="/login" className="link">Log In</Link>
      </div>
      </Col></Row>
      </Container>
      </body>
    </>
  );
};

export default Signup;