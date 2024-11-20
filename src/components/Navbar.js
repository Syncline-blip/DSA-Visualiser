// src/components/Navbar.js
import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation">
            <h1>DSA Visualiser</h1>
            <ul>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Data Structures</button>
                        <div className="dropdown-content">
                            <Link to="/data-structures/array">Array</Link>
                        </div>  
                    </div>
                </li>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Algorithms</button>
                        <div className="dropdown-content">
                            <Link to="/algorithms/sorting/bubble">Bubble Sort</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    ); 
};

export default Navbar;