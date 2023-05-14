import React from 'react'
import Party from './Party'

const Parties = () => {
    const list=sessionStorage.getItem("data")
    
   // console.log(list)
    const l2=JSON.parse(list)
    console.log(l2)
    // const list=prop.list
    const show=l2.map(item=>{
       
       
       return (<Party
            key={item.id}
            id={item.id}
            partyName={item.name}
            img={item.image}
            abb={item.abbreviation}
        />)
        
    })
  return (
    <div>
        {show}
    </div>
  )
}

export default Parties