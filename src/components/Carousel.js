import React from 'react';
import bgImg1 from '../assets/img1.svg';
import bgImg2 from '../assets/img2.svg';
import bgImg3 from '../assets/img3.svg';
export default function Carousel(){
    return(
        
            <div className="col-2 w-100 ">
            <div id="carouselExampleAutoplaying"  class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item " data-bs-interval="2000">
                <img src={bgImg1} class="w-50 mx-auto d-block" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Discover,Apply,Succeed</h5>
                    <p> Unleash your talent, find opportunities, and achieve success.</p>
                </div>
                </div>
                <div class="carousel-item active" data-bs-interval="2000">
                <img src={bgImg2} class="mx-auto d-block w-50" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Connecting Talent to Opportunity</h5>
                    <p>Enabling individuals to showcase their unique skills and talents.</p>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src={bgImg3} class="mx-auto d-block w-50" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                        <h5>Empowering Your Job Search Journey</h5>
                        <p>Helping you take control of your career and find the right opportunities.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
      

    );
}