import React, { useState } from "react"
import ec from "../ec.png"
import { Link, useNavigate } from 'react-router-dom';
import Register from "./Register";
import Login from "./Login"
import axios from "axios";
import Parties from "./Parties";


const Card = (prop) => {
    // const [reg,setReg]=useState({
    //     "aadhaar_No":"",
    //     "password":"",
    //     "const"
    // })
    const [partyList,setPartyList]=useState([])
    const navigate=useNavigate();
    const url="http://localhost:3000/easycast/login"

    function voting(){
      const data={"aadhaar_No":document.getElementById('aadhaar2').value,"password":document.getElementById('password2').value}
      console.log(data)
      axios.post(url,data)
      .then((res)=>{
        console.log(res)
       // setPartyList(res.data)
        sessionStorage.setItem("data",JSON.stringify(res.data))
        sessionStorage.setItem("aadhaar",data.aadhaar_No)
        window.location.replace('/parties')
        
        //navigate('/')
        // var r=document.getElementById('root2')
        // r.innerHTML=""
      })
      .catch(err=>{
        
           console.log(err.response.data)
           if(err.response.data=="User does not exist"){
            alert("Invalid Aadhaar No.")
           }
           else if(err.response.data=="ip"){
            alert("Incorrect password")
           }
           else{
            alert("Already voted")
           }
       // document.getElementById("aadhaar").value=""
       // window.location.replace('/')
        console.log(err)
      })
    }

    const execute=()=>{
        
    }

    function handleClick(){
        voting();
        //execute();
    }






    const registration=()=>{
        var a=document.getElementById("aadhaar").value
        var pass=document.getElementById("password").value
        var con=document.getElementById("cons").value
        if(pass==""){
            alert("Enter password")
            return
        }
        console.log(con)
        axios.post("http://localhost:3000/easycast/registerUser",{"aadhaar_No":a,"password":pass,"constituency":con})
        .then(res=>{console.log(res);window.location.replace('/')})
        .catch(error=>{
            console.log(error)
            if(error=="w"){
            alert(" please check your details")}
            else{
                alert("User has already registered")
            }
            window.location.replace('/')
        })
    }

  return (
        <div class="card mb-3 electiondiv">
            <div class="row g-0">
                <div class="col-md-2">
                    <img src={ec} class="img-fluid rounded-start "  width="170px" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">{prop.title}</h2>
                        <p class="card-text"><small class="text-muted">Voting on: {prop.date}</small></p>
                    </div>
                </div>
              <div class="col-md-2 ebtn" align="center">
            
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Register
</button> */}


        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">{prop.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <Register/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={registration}>Register</button>
            </div>
            </div>
        </div>
        </div>
              {/* </div> */}



              {/* <div class="col-md-2 ebtn" align="center"> */}
            
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Register
</button>
<br></br>
<br></br>
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
  Vote
</button>


        <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">{prop.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <Login/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={handleClick }>Vote</button>
            </div>
            </div>
        </div>
        </div>
              </div>




            </div>
              </div>

  )
}

export default Card