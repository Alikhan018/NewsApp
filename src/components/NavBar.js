import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
        >
          <div className={"container-fluid"}>
            <a
              className={`navbar-brand ${
                this.props.mode === "light" ? "text-black" : "text-white"
              } mx-5`}
              href="/"
            >
              <strong>NewsApp</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item mx-2">
                  <a
                    className={`navbar-brand ${
                      this.props.mode === "light" ? "text-black" : "text-white"
                    }`}
                    aria-current="page"
                    href="/business"
                  >
                    <span>Business</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a
                    className={`navbar-brand ${
                      this.props.mode === "light" ? "text-black" : "text-white"
                    }`}
                    href="/sports"
                  >
                    <span>Sports</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a
                    className={`navbar-brand ${
                      this.props.mode === "light" ? "text-black" : "text-white"
                    }`}
                    href="/entertainment"
                  >
                    <span>Entertainment</span>
                  </a>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={this.props.fun}
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className={`form-check-label text-${
                    this.props.mode === "dark" ? "white" : "black"
                  }
                    }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {this.props.modeText}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
