import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Register = () => {
  const [detail,setDetail]=useState([])
  let dropDown
  detail?dropDown=detail.map((item)=>(
    <option value={item.name}>{item.name}</option>
  )):<></>
  const [verified,setVerified]=useState(false)
  const url="http://localhost:3000/easycast/check"
  function handleClick(){
    const data=document.getElementById('aadhaar').value
    console.log(data)
    axios.post(url,{"aadhaar_No":data})
    .then((res)=>{
      console.log(res)
      setDetail(res.data)
      setVerified(true)
    })
    .catch(err=>{
      alert("Invalid Aadhaar No.")
      document.getElementById("aadhaar").value=""
     // window.location.replace('/')
      console.log(err)
    })
  }
  return (
    <div >
      <h3>Registration</h3>
      <br/>
      <div class="row">
        <div class="col-4" align="left">
      <label htmlFor='aadhaar' >Aadhaar No : </label>
      </div>
      <div class="col-8" align="left">
      <input id='aadhaar' name='aadhaar' type='text' />
      &nbsp;
      &nbsp;
      &nbsp;
      <button onClick={handleClick}>Verify</button>


      </div>
      <br/>
      <br/>
      
      <div class="row">
      <div class="col-4" align="left">
      <label htmlFor='password' >Password : </label>
      </div>
    
      <div class="col-8" align="left">
      <input id='password' name='password' type='password'/>
      <br/>
      <br/>
      </div>
      </div>
      {verified?<label htmlFor='cons'>Constituency : </label>:<></>}
      {verified?  <select id='cons'>
        {dropDown}
      </select> :<></>}
      </div>
    </div>
  )
}

export default Register