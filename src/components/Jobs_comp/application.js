import {React,useState} from 'react'
import star from '../../Icon/star.svg'
import { applications } from '../../pages/data';

const Application_card = ({arr}) => {
    const [status, setStatus] = useState('');

    const handleShortlist = () => {
        setStatus('shortlisted');
        applications.map((app) => {
        if (app.id === arr.id) {
            app.status= 'shortlisted'
        }});
    };

    const handleAccept = () => {
        setStatus('accepted');
        applications.map((app) => {
        if (app.id === arr.id) {
            app.status= 'accepted'
        }});
    };

    const handleReject = () => {
        setStatus('rejected');
        applications.map((app) => {
        if (app.id === arr.id) {
            app.status= 'rejected'
        }});
    };
    
  return (
    <div className='d-flex flex-column justify-content-between text-start p-3 shadow rounded-3 col-3'>
        <div className='d-flex flex-column gap-3'>
            {/* Info */}
            <div className='d-flex flex-row align-items-center gap-3'>
                <img src={arr.img} className='img-fluid rounded-2'/>
                <div className='d-flex flex-column gap-1'>
                    <h2 className='sub-head fw-bold text-primary'>{arr.name}</h2>
                    {/* Stars */}
                    <div className='d-flex flex-row gap-1'>{Array.from({ length: arr.rating }, (_, index) => (
                        <img key={index} src={star} alt={`Star ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column'>
                <h2 className='sub-head fw-bold'>{arr.title}</h2>
                <p className='body'>{arr.bio}</p>
            </div>
        </div>
        {/* Buttons */}
        <div className='d-flex flex-column gap-3'>
            {status === '' && (
            <div className='d-flex flex-row align-items-center gap-4'>
                <button className='btn btn-primary col-5' onClick={handleShortlist}>Shortlist
                </button>
                <button className='btn btn-danger col-5' onClick={handleReject}>Reject
                </button>
            </div>
            )}
            {status === 'shortlisted' && (
            <div className='d-flex flex-row align-items-center gap-4'>
                <button className='btn btn-success col-5' onClick={handleAccept}>Accept
                </button>
                <button className='btn btn-danger col-5' onClick={handleReject}>Reject
                </button>
            </div>
            )}
            {status === 'accepted' && (
            <div className='d-flex flex-row align-items-center gap-4'>
                <button className='btn btn-success form-control' disabled onClick={handleAccept}>Accepted
                </button>
            </div>
            )}
            {status === 'rejected' && (
            <div className='d-flex flex-row align-items-center gap-4'>
                <button className='btn btn-danger form-control' disabled onClick={handleReject}>Rejected
                </button>
            </div>
            )}
            <a className='btn btn-warning' href={`${arr.resume}`} target='_parent'>View Resume</a>
        </div>
    </div>
  )
}

export default Application_card