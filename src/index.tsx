import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../src/utils/config/theme";

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);
