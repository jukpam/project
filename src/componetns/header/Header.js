import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} width="150px"/>
            </div>

            <div className="hd-main"> 
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses <i class="fa-solid fa-chevron-down"></i></Link> 
            
            <Link to="/books">Books</Link>
            <Link to="/test">Test</Link>
            <Link to="/store">Store</Link>
            </div>

            <div className="hd-right">
            <i class="fa-solid fa-cart-shopping"></i>
            <button className="btn-n">Log in</button>
            <button className="btn-s">Sign up</button>
            </div>
        </div>
    );
}

export default Header;
