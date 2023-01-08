import React, { useEffect, useState } from 'react'

export default function UseEfect2() {

  const [arrfile,setArrfile] = useState([]);

  useEffect(()=>{
    fetch("https://archive.org/metadata/TheAdventuresOfTomSawyer_201303").then(response => {
      return(response.json())
    }).then(data=>{
      setArrfile(data.files)
    })
  },[])

  return (
    <div>

      <h1>Return Array (Api)</h1>

      <ul>
        {
          arrfile.map((F)=>{

            return <li>Name: {F.name} --- format :  {F.format}  ---- size {F.size}</li>
          })
        
        }
      </ul>



    </div>
  )
}
