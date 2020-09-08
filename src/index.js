/* eslint-disable no-undef */
import React from "react";
import AppAdmin from "./app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";

const rootApp = document.getElementById("app");
render(
  <Router>
    <Route component={AppAdmin} />
  </Router>,
  rootApp
);
