import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import bgImg1 from "../assets/img1.svg";
import bgImg2 from "../assets/img2.svg";
import bgImg3 from "../assets/img3.svg";
import hi from '../assets/hi.svg';
import './styles.css';

export default function Login() {
  const mystyle = {
    color: "#2ba4e4",
  };
  return (
    <section>
      <div className="register d-flex flex-row vh-100">
        <div className="d-flex flex-row align-items-center col-6 justify-content-center bg-primary-subtle">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={bgImg1} class="img-fluid d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bgImg2} class="img-fluid d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bgImg3} class="img-fluid d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
          <div className="col-6 d-flex align-items-center">
            <form id="form" className="d-flex flex-column col-6 mx-auto gap-2 text-start">
              <img src={hi} height={50} width={50}></img>
              <h1 className=" fw-bolder head">Welcome back!</h1>
              <h5 className=" fw-lighter text-dark-emphasis">Please login to access your account.</h5>
              <label htmlFor="username" className=" fs-5 form-label">Username</label>
              <input type="text" className="form-control" placeholder="Type your username" />
              <label htmlFor="password" className="fs-5 form-label">Password</label>
              <input type="text" className="form-control" placeholder="Type your password" />
              <span style={mystyle}>Forgot Password?</span>
              <span style={mystyle}>Login as</span>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary col-5">Recruiter</button>
                <button className="btn btn-primary col-5">Recruitee</button>
              </div>
            </form>
          </div>
      </div>
    </section>
  );
}