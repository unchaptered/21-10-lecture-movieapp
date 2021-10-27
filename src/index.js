import React from "react";
import ReactDOM from "react-dom";

import styles from "./css/index.css";

// Router Modifier
import Router from "./Router";

// Router
import About from "./routes/About";
import Home from "./routes/Home";

// Component
import Nav from "./components/Nav";
import Header from "./components/Header";


// ReactDOM.render(<Nav />,document.getElementById("navParent"));
// ReactDOM.render(<Header />,document.getElementById("headerParent"));
ReactDOM.render(<Router />,document.getElementById("App"));