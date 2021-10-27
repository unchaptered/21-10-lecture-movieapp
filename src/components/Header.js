import React from "react";
import { Link } from "react-router-dom"
;
import styles from "../css/Header.css";

function Header () {
    return (
        <header className="headerChild">
            <div className="headerDiv">
                <Link to="/" className="headerTitle">Movie</Link>
                <h3 className="headerDescription">Description</h3>
            </div>
        </header>
    );
};

export default Header;