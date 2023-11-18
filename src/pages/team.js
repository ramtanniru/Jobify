import React from 'react';
import img from '../assets/img1.svg'
import '../Style.css';
export default function Team(){
    return(
        <div className='team-container text-center '>
            <h1 style={{color:"white",fontFamily:"Montserrat",fontWeigth:"bold"}}>Meet the Team</h1>
            <div className='d-flex flex-row justify-content-between w-100'>
            <div className='card-container mx-2'>
                <div className='image-container'>
                    <img src={img} alt="Teammate 1" className='img' />
                    <div className='p-2'><h4>Name</h4>
                    <p>About the person...</p></div>
                    </div>
            </div>
            <div className='card-container mx-1'>
                <div className='image-container'>
                    <img src={img} alt="Teammate 2" className='img' />
                    <div className='p-2'><h4>Name</h4>
                    <p>About the person...</p></div>
                    </div>
            </div>
            <div className='card-container mx-1'>
                <div className='image-container'>
                    <img src={img} alt="Teammate 1" className='img' />
                    <div className='p-2'><h4>Name</h4>
                    <p>About the person...</p></div>
                    </div>
            </div>
            <div className='card-container'>
                <div className='image-container'>
                    <img src={img} alt="Teammate 1" className='img' />
                    <div className='p-2'><h4>Name</h4>
                    <p>About the person...</p></div>
                    </div>
            </div>
            <div className='card-container'>
                <div className='image-container'>
                    <img src={img} alt="Teammate 1" className='img' />
                    <div className='p-2'><h4>Name</h4>
                    <p>About the person...</p></div>
                    </div>
            </div>
        </div>
        </div>
    );
}