import React, { useEffect, useState } from 'react'

export default function Useffectcount() {

  const [nbr,setNbr] = useState(0);


  useEffect(()=> {
    document.title = `You clicked ${nbr} times`;
  }, [nbr])



  return (
    <div>
        <h1>useEffect</h1>
        <p>count = {nbr} </p>
        <input type="button" onClick={()=>setNbr(nbr + 1)} value="click"/>


    </div>
  )
}
