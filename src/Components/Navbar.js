import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/anything.html">News Monkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/anything.html">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="/anything.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu" style={{textTransform : 'capitalize'}}>
            <li><Link className="dropdown-item" to="/business">business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
            <li><Link className="dropdown-item" to="/general">general</Link></li>
            <li><Link className="dropdown-item" to="/sciences">science</Link></li>
            <li><Link className="dropdown-item" to="/sports">sports</Link></li>
            <li><Link className="dropdown-item" to="/technology">technology</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="/anything.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Countries
          </Link>
          <ul className="dropdown-menu text-white" style={{textTransform : 'capitalize'}}>
            <li><Link className="dropdown-item" to="/in">India</Link></li>
            <li><Link className="dropdown-item" to="/us">USA</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/anytgafh'>Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
  }
}

export default Navbar