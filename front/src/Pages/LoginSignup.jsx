import React from "react";
import './CSS/LoginSignup.css'
import { useState } from "react";


const LoginSignup = () => {

  const [state,setState]=useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address:"",
    phone:""
  });

  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  
  const signup = async () => {
    let dataObj;
    await fetch('http://localhost:4001/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }

  const login = async () => {
    let dataObj;
    await fetch('http://localhost:4001/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((resp) => resp.json())
  .then((data) =>dataObj=data);
    if(dataObj){
      if (dataObj.success) {
        console.log(dataObj.data);
        console.log(dataObj.data._id);
        localStorage.setItem('auth-token',dataObj.token);
        localStorage.setItem('userName',(dataObj.data.name))
        localStorage.setItem('userEmail',(dataObj.data.email))
        localStorage.setItem('userAddress',(dataObj.data.address))
        localStorage.setItem('userPhone',(dataObj.data.phone))
        localStorage.setItem('userId',dataObj.data._id)
        
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
    }
  }



  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your name"/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email address"/>
          {state === "Sign Up"?<input name='phone'  value={formData.phone} onChange={changeHandler} type="contact" placeholder="Phone Number" minLength={10} maxLength={10}/>:<></>}
          {state === "Sign Up"?<input name='address' value={formData.address} onChange={changeHandler} type="text" placeholder="Address"/>:<></>}
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
        {state === "Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:
        <p className="loginsignup-login">Create an account<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup