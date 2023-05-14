import axios from 'axios'
import React from 'react'

const Party = (prop) => {
    const number=sessionStorage.getItem('aadhaar')
    
  const vote=()=>{
    document.addEventListener('click',function(evt){
        let element=evt.target
        
        axios.put("http://localhost:3000/easycast/vote/"+number,{"party":element.value})
        .then(res=>{
            alert("You have Succesfully Voted")
            sessionStorage.clear()
             window.location.replace('/')
        })
        .catch(err=> {alert("Network error");console.log(err)})
    })

}
  
  return (
    <div class="card mb-3 electiondiv" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={prop.img} class="img-fluid rounded-start pi" alt="..." width='150px'/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h2 class="card-title"> {prop.partyName}</h2>
        <h3>{prop.abb}</h3>
      </div>
    </div>

    <div class="col-md-2 rr" onClick={vote}><button id={`btn${prop.id}`} class="rr r2" value={prop.abb}> VOTE </button></div>
  </div>
 
</div>
  )
}

export default Party