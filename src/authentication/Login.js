import React from 'react'
import Lottie from 'lottie-react';
import loginAnimataion from "../assets/Animation/107385-login.json"
import { Link } from 'react-router-dom';

const Login = () => {

const handleLogin=(event)=>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value 
  const loginData ={
    userEmail : email,
    password
  }

  console.log(loginData)

  fetch("http://localhost:5000/api/v1/user/login",{
    method: "POST",
    headers: {
      "Content-type" : "application/json"
    },
    body:JSON.stringify(loginData) 
  })
  .then(res => res.json())
  .then(data =>{
   if(data?.status === "success"){
    alert("Login Successful")
    const token = data ?. data?. token
    localStorage.setItem("token",token)
   }
   else{
    alert("Login is not successful")
   }
  })
}

  return (
    <div>
        <h1 className='text-5xl font-bold mt-16 text-center text-cyan-900 '>Log In Here</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
               {/* lottie  */}
        <div className='flex items-center '>
                    <Lottie className='w-96 ml-28' animationData={loginAnimataion} loop={true} />
                </div>

             <form onSubmit={handleLogin}>
             <div className='grid grid-cols-1'>
              
                <div className='mt-8'>
                <label className="label">
                    <span className="label-text"> Your Email?</span>
               </label>
                <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <div className='mt-1'>
                <label className="label">
                    <span className="label-text"> Your password?</span>
               </label>
                <input type="text" name='password' placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                
              </div>
                <p className='mt-1 font-normal text-sm'>Need Account <Link className='underline' to='/signup'>Sign Up</Link></p>
               <button className="text-sm mt-8  w-1/2 mx-auto border-b-2  btn btn-primary ">
                    <Link>Log In</Link>
               </button>
              
             </form>

        </div>
    </div>
  )
}

export default Login