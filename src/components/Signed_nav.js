import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles.css';
import logo from '../Icon/logo.svg';
import {Outlet,Link} from 'react-router-dom';

const Header_2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light px-sm-3 shadow fixed-top">
        <div className="container-fluid col-12">
          <a  className="navbar-brand d-flex flex-row gap-2 col-1" href="/">
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
                <a  class="nav-link active fw-bold" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a  class="nav-link fw-bold" href="Jobs">
                  JOBS
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link fw-bold" href="About">ABOUT US</a>
              </li>
            </ul>
            <div className="col-lg-2 d-flex flex-row align-items-center justify-content-around">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none">
                    <path d="M0 25.5V22.5H3V12C3 9.925 3.625 8.081 4.875 6.468C6.125 4.855 7.75 3.799 9.75 3.3V2.25C9.75 1.625 9.969 1.0935 10.407 0.655503C10.845 0.217503 11.376 -0.000996583 12 3.41685e-06C12.625 3.41685e-06 13.1565 0.219003 13.5945 0.657003C14.0325 1.095 14.251 1.626 14.25 2.25V3.3C16.25 3.8 17.875 4.8565 19.125 6.4695C20.375 8.0825 21 9.926 21 12V22.5H24V25.5H0ZM12 30C11.175 30 10.4685 29.706 9.8805 29.118C9.2925 28.53 8.999 27.824 9 27H15C15 27.825 14.706 28.5315 14.118 29.1195C13.53 29.7075 12.824 30.001 12 30Z" fill="black"/>
                </svg>
              </a>
              <a className="" href="/Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.455 10.909C20.455 12.3556 19.8803 13.743 18.8574 14.766C17.8345 15.7889 16.4471 16.3636 15.0004 16.3636C13.5538 16.3636 12.1664 15.7889 11.1435 14.766C10.1206 13.743 9.5459 12.3556 9.5459 10.909C9.5459 9.46238 10.1206 8.07499 11.1435 7.05207C12.1664 6.02914 13.5538 5.45447 15.0004 5.45447C16.4471 5.45447 17.8345 6.02914 18.8574 7.05207C19.8803 8.07499 20.455 9.46238 20.455 10.909ZM17.7277 10.909C17.7277 11.6323 17.4404 12.326 16.9289 12.8375C16.4175 13.3489 15.7238 13.6363 15.0004 13.6363C14.2771 13.6363 13.5834 13.3489 13.072 12.8375C12.5605 12.326 12.2732 11.6323 12.2732 10.909C12.2732 10.1857 12.5605 9.492 13.072 8.98054C13.5834 8.46908 14.2771 8.18174 15.0004 8.18174C15.7238 8.18174 16.4175 8.46908 16.9289 8.98054C17.4404 9.492 17.7277 10.1857 17.7277 10.909Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71591 0 0 6.71591 0 15C0 23.2841 6.71591 30 15 30C23.2841 30 30 23.2841 30 15C30 6.71591 23.2841 0 15 0ZM2.72727 15C2.72727 17.85 3.69955 20.4736 5.32909 22.5573C6.4735 21.0544 7.94986 19.8365 9.64286 18.9986C11.3359 18.1607 13.1997 17.7256 15.0886 17.7273C16.9532 17.7255 18.7935 18.1494 20.4695 18.9665C22.1454 19.7837 23.6127 20.9726 24.7595 22.4427C25.9411 20.8931 26.7366 19.0844 27.0803 17.1663C27.424 15.2481 27.306 13.2757 26.7361 11.4123C26.1662 9.54877 25.1608 7.84779 23.8029 6.45005C22.4451 5.05231 20.774 3.99799 18.9278 3.37433C17.0816 2.75067 15.1135 2.5756 13.1862 2.8636C11.2589 3.1516 9.4279 3.8944 7.84469 5.03053C6.26147 6.16666 4.97156 7.66346 4.08168 9.39709C3.19179 11.1307 2.72752 13.0513 2.72727 15ZM15 27.2727C12.1827 27.277 9.45036 26.3077 7.26545 24.5291C8.1449 23.2701 9.31546 22.2422 10.6775 21.5328C12.0396 20.8233 13.5529 20.4535 15.0886 20.4545C16.6052 20.4533 18.1002 20.814 19.4494 21.5065C20.7987 22.199 21.9632 23.2034 22.8464 24.4364C20.6445 26.2728 17.8672 27.2767 15 27.2727Z" fill="black"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Header_2;
