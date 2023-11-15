import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles.css';
import logo from '../Icon/logo.svg';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light px-sm-3 shadow fixed-top">
      <div className="container-fluid col-12">
        <a className="navbar-brand d-flex flex-row gap-2 col-1" href="#">
          <img src={logo} height={40}/><span className="head-sub-head fw-bold grad ">Jobify!</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-11" id="navbarSupportedContent">
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <ul class="col-lg-6 navbar-nav mb-2 mb-lg-0 col-sm-7 col-md-7 gap-sm-3">
            <li class="nav-item">
              <a class="nav-link active fw-bold" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#h3">
                JOBS
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link fw-bold" href="#h4">ABOUT US</a>
            </li>
          </ul>
          <div className="col-lg-2 d-flex flex-row align-items-center justify-content-around">
            <a>
                Sign up
            </a>
            <a className="btn  btn-primary " href="#h6">
                  Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
