import React from 'react'

const Form1 = () => {
  const handleViewPassword = ()=>{
    let p = document.getElementById('password');
    if(p.type=='text'){
      p.innerHTML.type='password';
    }else{
      p.innerHTML.type='text';
    }
  }
  return (
    <div className='d-flex flex-column justify-content-center my-auto gap-5'>
      <h1 className='head'>Recruitee Sign up</h1>
      <form className='d-flex flex-column gap-3'>
        <div className='d-flex flex-column'>
          <label className='form-label body' for='username'>Username</label>
          <input className='form-control body' id='username' placeholder='Type your username' type='text'/>
        </div>
        <div className='d-flex flex-column'>
          <label className='form-label body' for='email'>Email ID</label>
          <input className='form-control body' id='email' placeholder='Type your email' type='email'/>
        </div>
        <div className='d-flex flex-column'>
          <label className='form-label body' for='password'>Password</label>
          <div className='input-group'>
            <input className='form-control body' id='password' placeholder='Type your password' type='password'/>
            <span></span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form1