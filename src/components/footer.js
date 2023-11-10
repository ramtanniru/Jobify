import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Apply now */}
        <div className='position-relative mt-5 pt-3'>
            <div className='my-5'></div>
            <div className='position-absolute start-50 translate-middle col-9 mt-5 p-3 mx-auto shadow rounded-3 bg-white'>
                <div className='mb-4 py-2'>
                    <h1 className='head'>Looking for a change in career?<span className='text-primary'>Apply for a Job</span></h1>
                    <p className='body m-0 col-10 mx-auto'>"Experience the magic of design as we reveal the creation of our website in our latest YouTube video. Join us on a visual journey from concept to reality, behind our digital presence."</p>
                </div>
                <button className='btn btn-primary py-2 px-5'>Apply now</button>
            </div>
            <div className='bg-primary-subtle' style={{backgroundColor:"#FAFAFA", height:200}}>
            </div>
        </div>
        {/* Footer */}
        <div className='pt-4' style={{backgroundColor:"#FAFAFA"}}>
            {/* Main */}
            <div className='d-flex felx-wrap justify-content-between text-start mx-5'>
                <div className='d-flex flex-column'>
                    <h1 className='sub-head fw-bold m-0'>Jobify</h1>
                    <a href='https://github.com/ramtanniru/Jobify' className='body text-dark-emphasis text-decoration-none'>Github</a>
                    <a href=''></a>
                </div>
                <div className='d-flex flex-column'>
                    <p className='body fw-bold m-0'>Community</p>
                    <a href='' className='body text-dark-emphasis text-decoration-none'>DEV Community Post</a>
                </div>
                <div className='d-flex flex-column'>
                    <p className='body fw-bold m-0'>Find Us</p>
                    <a href='' className='body text-dark-emphasis text-decoration-none'>Instagram</a>
                    <a href='' className='body text-dark-emphasis text-decoration-none'>Twitter</a>
                    <a href='' className='body text-dark-emphasis text-decoration-none'>Discord</a>
                    <a href='' className='body text-dark-emphasis text-decoration-none'>Facebook</a>
                </div>
                <div className='d-flex flex-column'>
                    <p className='body fw-bold m-0'>Github</p>
                    <a href='' className='body text-dark-emphasis text-decoration-none'>Contributors</a>
                    <a href='' className='body text-dark-emphasis text-decoration-none'></a>
                    <a href='' className='body text-dark-emphasis text-decoration-none'></a>
                    <a href='' className='body text-dark-emphasis text-decoration-none'></a>
                </div>
            </div>
            {/* Copyrights */}
            <hr/>
            <div className='d-flex flex-row justify-content-between px-4 pb-3'>
                <div className='d-flex flex-row align-items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
                    </svg>
                    <p className='body m-0'>Copyrights</p>
                </div>
                <div>
                    <p className='body m-0'>Jobify</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer