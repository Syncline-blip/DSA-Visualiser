// src/components/Navbar.js
import React from "react";
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown';

const Navbar = () => {
    const algorithmsMenu = [
        
    ];

    const dataStructuresMenu = [

    ]
    
    return (
        <nav className="navbar">
            <h1>DSA Visualiser</h1>
            <ul>
                <li>
                    <Dropdown title="Data Structures" menuItems={dataStructuresMenu} />
                </li>
                <li>
                    <Dropdown title="Algorithms" menuItems={algorithmsMenu} />
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;