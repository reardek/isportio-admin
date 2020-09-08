/* eslint-disable no-undef */
import React from "react";
//import AppAdmin from "./app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import "./app.scss";

function AppAdmin() {
  return (
    <Router>
      <h1>Hello</h1>
    </Router>
  );
}

const rootApp = document.getElementById("app");
render(<AppAdmin />, rootApp);
