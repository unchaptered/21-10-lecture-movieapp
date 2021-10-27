import React from "react";
import styles from "../css/Header.css";

function Header () {
    return (
        <header className="headerChild">
            <div className="headerDiv">
                <a href="/" className="headerTitle">Movie</a>
                <h3 className="headerDescription">Description</h3>
            </div>
        </header>
    );
};

export default Header;