import React from "react";
import styles from "./css/Header.css";

function Header () {
    return (
        <header className="headerChild">
            <div className="headerDiv">
                <button className="headerTitle">Movie</button>
                <h3 className="headerDescription">Description</h3>
            </div>
        </header>
    );
};

export default Header;