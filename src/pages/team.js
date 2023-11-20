import React from 'react';
import ram from '../assets/ram.jpg';
import preethi from '../assets/preethi.jpg';
import likhitha from '../assets/likhitha.jpg';
import img from '../assets/img1.svg';
import sujan from '../assets/sujan.jpg';
import praneeth from '../assets/praneeth.jpg'
import '../Style.css';
export default function Team(){
    return(
        <div className='team-container text-center '>
            <h1 style={{color:"white",fontFamily:"Montserrat",fontWeigth:"bold"}}>Meet the Team</h1>
            <div className='d-flex flex-row justify-content-between w-100'>
            <div className='card-container mx-2'>
                <div className='image-container'>
                    <img src={ram} alt="Teammate 1" className='img' />
                    <div className='p-2'><h4>T.Leela Sai Ram</h4>
                    <p>Frontend and Backend Developer</p></div>
                    </div>
            </div>
            <div className='card-container mx-1'>
                <div className='image-container'>
                    <img src={sujan} alt="Teammate 2" className='img' />
                    <div className='p-2'><h4>K.Sujan</h4>
                    <p>Backend Developer</p></div>
                    </div>
            </div>
            <div className='card-container mx-1'>
                <div className='image-container'>
                    <img src={likhitha} alt="Teammate 1" className='img' />
                    <div className='p-2'><h4>M.Likhitha</h4>
                    <p>Frontend Developer</p></div>
                    </div>
            </div>
            <div className='card-container'>
                <div className='image-container'>
                    <img src={preethi} alt="Teammate 1" className='img' />
                    <div className='p-2'><h4>M.Preethi</h4>
                    <p>UI and Frontend Developer</p></div>
                    </div>
            </div>
            <div className='card-container'>
                <div className='image-container'>
                    <img src={praneeth} alt="Teammate 1" className='img' />
                    <div className='p-2'><h4>S.Praneeth</h4>
                    <p>UI Designer</p></div>
                    </div>
            </div>
        </div>
        </div>
    );
}