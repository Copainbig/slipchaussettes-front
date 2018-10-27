import * as React from "react";
import * as ReactDOM from "react-dom";
import "./main.css";


import Prompt from "./components/Prompt";

ReactDOM.render(
    <Prompt user="visitor" currentPath="slip-chaussettes.io"/>,
    document.getElementById("root")
);