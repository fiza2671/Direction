import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FirebaseContext } from "./store/Context"
import Context from "./store/Context"
import { BrowserRouter } from "react-router-dom";
import firebase from "./firebase/config";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <FirebaseContext.Provider value={firebase}>
        <Context>
          <App />
       </Context>
      </FirebaseContext.Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
  )

  
  