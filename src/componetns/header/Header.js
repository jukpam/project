import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/books">Books</Link>
            <Link to="/test">Test</Link>
            <Link to="/store">Store</Link>
        </div>
    );
}

export default Header;
