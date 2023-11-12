import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles.css';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light px-sm-3 shadow">
      <div class="container-fluid col-12">
        <a class="navbar-brand col-1" href="#">
          <span className=" fw-bold ">Job</span><span className="text-primary fw-bold">ify.</span>
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
          <ul class="navbar-nav mb-2 mb-lg-0 col-lg-6 col-sm-7 col-md-7 gap-sm-3">
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
          <div className="col-lg-2 col- d-flex flex-row align-items-center gap-5">
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
