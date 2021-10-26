import React from "react";
import ReactDOM from "react-dom";

import styles from "./css/index.css";


import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import ContentMovie from "./contentMovie";

ReactDOM.render(<Nav />,document.getElementById("navParent"));
ReactDOM.render(<Header />,document.getElementById("headerParent"));
ReactDOM.render(<Main />,document.getElementById("mainParent"));