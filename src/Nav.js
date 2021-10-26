import React from "react";
import styles from "./css/Nav.css";

function Nav() {
    return (
        <nav className="navChild">
            <button className="navDiv" type="button">menu</button>
            <button className="navDiv" type="button">login</button>
            <button className="navDiv" type="button">join</button>
            <button className="navDiv" type="button">setting</button>
        </nav>
    );
};

export default Nav;
