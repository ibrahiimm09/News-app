import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/anything.html">News Monkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/anything.html">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="/anything.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" style={{textTransform : 'capitalize'}}>
            <li><a className="dropdown-item" href="/anything.html">business</a></li>
            <li><a className="dropdown-item" href="/anything.html">entertainment</a></li>
            <li><a className="dropdown-item" href="/anything.html">general</a></li>
            <li><a className="dropdown-item" href="/anything.html">sciences</a></li>
            <li><a className="dropdown-item" href="/anything.html">ports</a></li>
            <li><a className="dropdown-item" href="/anything.html">technology</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="/anything.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Countries
          </a>
          <ul className="dropdown-menu text-white" style={{textTransform : 'capitalize'}}>
            <li><a className="dropdown-item" href="/anything.html">India</a></li>
            <li><a className="dropdown-item" href="/anything.html">USA</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href='/anytgafh'>Disabled</a>
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