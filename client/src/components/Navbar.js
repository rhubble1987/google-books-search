import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" href="/">Google Books</Link>
        </div>
        <div className="navbar-menu">
            <Link to="/search" className="navbar-item">Search</Link>
            <Link to="/saved" className="navbar-item">Saved</Link>
        </div>
    </nav>
)
}

export default Navbar;