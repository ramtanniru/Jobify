import React from 'react';
import img1 from '../../Icon/google.svg';
import img2 from '../../Icon/microsoft.svg';
import img3 from '../../Icon/oracle.svg';
import img4 from '../../Icon/fb.svg';
import img5 from '../../Icon/insta.svg';
import img6 from '../../Icon/twitter.svg';
import C4 from './card4';
const H6 = () => {
  const arr =[
    {
        role:"Developer",
        type:"Full time",
        head:"Web developer",
        body:"Create and maintain functional websites for online presence and interaction.",
        location:'Banglore',
        salary:"50-80k",
        logo:img1,
        company:"Google"
    },
    {
        role:"Illustrator",
        type:"Remote",
        head:"Graphic Designer",
        body:"Design visual elements for effective communication and aesthetics.",
        location:'Jakarta',
        salary:"90-100k",
        logo:img2,
        company:"Microsoft"
    },
    {
        role:"Developer",
        type:"Full Time",
        head:"Marketing Manager",
        body:"Strategize and execute promotional efforts for business growth.",
        location:'France',
        salary:"90-100k",
        logo:img3,
        company:"Oracle"
    },
    {
        role:"Design layout",
        type:"Full Time",
        head:"Production Designer",
        body:"Harness data insights to optimize marketing strategies and drive business growth.",
        location:'Bangladesh',
        salary:"150-200k",
        logo:img4,
        company:"Facebook"
    },
    {
        role:"Marketing",
        type:"Full Time",
        head:"Analytics Market",
        body:"Harness data insights to optimize marketing strategies and drive business growth.",
        location:'Singapore',
        salary:"150-200k",
        logo:img5,
        company:"Instagram"
    },
    {
        role:"UI/UX",
        type:"Full Time",
        head:"UI/UX Designer",
        body:"Craft user-friendly and visually appealing digital experiences.",
        location:'New york',
        salary:"90-100k",
        logo:img6,
        company:"Twitter"
    },
    ]
  var i = 0;
  const colors = ['#F3287A',"#2C6BDB","#FEC200"];
  return (
    <div className='py-5' style={{backgroundColor:"#FAFAFA"}}>
        <div className='d-flex flex-column gap-5 my-5'>
            <div className='col-8 mx-auto'>
                <h6 className='sub-head fw-bold text-primary'>Latest Jobs</h6>
                <h1 className='head'>
                Recommended Jobs For <span className='text-primary'>You</span>
                </h1>
                <p className='body m-0'>
                Explore a curated selection of job opportunities handpicked just for you.
                 Our personalized recommendations are tailored to match your skills, experience,
                  and career preferences, ensuring you find the perfect fit for your next career move.
                </p>
            </div>
            <div className='d-flex flex-wrap gap-5 justify-content-center'>
            {/* {
                arr.forEach(card => {
                    <C4 arr={card} colour={colors[i]}/>
                    const temp = colors.shift();
                    colors.push(temp);
                    i++;
                    if(i>2){
                        i=0;
                    }
                })
            } */}
            {arr.map((card, index) => (
                <C4 key={index} arr={card} colour={colors[index % colors.length]} />
            ))}

            </div>
        </div>
    </div>
  )
}

export default H6