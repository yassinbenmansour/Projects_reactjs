import React from 'react'
import { useState } from 'react';

export default function Compo1() {

    const [nom, setNom] = useState('');
    const modify = (e) =>{
        setNom(e.target.value);
        console.log(nom);
    }
  return (
    <div>
      Votre nom  <input type="text"  value={nom} onChange={(e)=> modify(e)} />
    </div>
  )
}
