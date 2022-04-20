import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="Container">
       <Link>Homw</Link>
       </div>
    </nav>
    )
}

export default Navbar;