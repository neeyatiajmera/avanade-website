import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link class="navbar-brand" to="/">
          <img class ="logo"
              src={require("./logo-tb.png")}
              alt="group"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/checkin" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/checkin">
                  Check-In
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/selfreport" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/selfreport">
                  Self-Report
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/resources" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/resources">
                  Resources
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);