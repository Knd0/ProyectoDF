import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (<>
      <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-search me-2"></i>Proyecto<span className="fs-5">Proyecto</span></h1>
                    <img src="img/logo.png" alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/" className="nav-item nav-link">About</Link>
                        <Link to="/" className="nav-item nav-link">Service</Link>
                        <Link to="/" className="nav-item nav-link">Project</Link>
                        <Link to="/" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
            </div>
</>
  );
}

export default Navbar;
