/* eslint-disable no-undef */
import React from "react";
import { render } from "react-dom";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

import AppAdmin from "./app";

//import "./app.scss";

const Root = () => {
  return (
    <ScopedCssBaseline>
      <AppAdmin />
    </ScopedCssBaseline>
  );
};

const rootApp = document.getElementById("root");
render(<Root />, rootApp);
