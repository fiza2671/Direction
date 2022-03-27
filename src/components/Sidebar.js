
    <body className="formBody">
    <section className="container main-hero-container">
    <div className="row">
    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start "></div>
     <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <div className="p-4 box">
        
          <h2 className="mb-3 text-center">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}

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
    
    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/auth.png"
                alt="heroimg"
                className="img-fluid"
              />  
    </div>
    
    </section>
  </body>