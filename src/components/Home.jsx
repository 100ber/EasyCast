import axios from 'axios'
import Card from './Card'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [eData,setdata]=useState([]);
    const display =eData?eData.map((item)=><Card key={item.id} title={item.title} date={item.election_date}/>):[]
    const apiLink="http://localhost:3000/easycast/getElection"
    useEffect(()=>{
        axios.get(apiLink)
        .then(res=>{
          setdata(res.data)
        });
    },[])
  return (
    <div id="root2">{display}</div>
  )
}

export default Home