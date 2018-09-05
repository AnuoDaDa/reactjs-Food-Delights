import React from "react";
import {render}from "react-dom";
import MterialView from "./MterialView.js";

let url='http://localhost:8000/material';
render(
    <MterialView url = {url}></MterialView>,
    document.getElementById("app-material")
)