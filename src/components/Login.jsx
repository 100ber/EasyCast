import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Login = () => {
  
  return (
    <div >
      <h3>Log In</h3>
      <br/>
      <div class="row">
        <div class="col-4" align="left">
      <label htmlFor='aadhaar' >Aadhaar No : </label>
      </div>
      <div class="col-8" align="left">
      <input id='aadhaar2' name='aadhaar' type='text' />


      </div>
      <br/>
      <br/>
      
      <div class="row">
      <div class="col-4" align="left">
      <label htmlFor='password' >Password : </label>
      </div>
    
      <div class="col-8" align="left">
      <input id='password2' name='password' type='password'/>
      <br/>
      <br/>
      </div>
      </div>

      </div>
    </div>
  )
}



export default Login