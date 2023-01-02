import React from 'react'
import { useState } from 'react';

export default function Calcul2() {

    //declaration des states

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [result, setResult] = useState();


    const modf1=(e) => {
        setN1(e.target.value);
    }

    const modf2=(e) => {
        setN2(e.target.value);
    }
    const modf3=(e) => {
        setResult(e.target.value);
    }


    const somme = ()=> {

        setResult (Number(n1)+Number(n2));

    }

  return (
    <div>

        <h1 className='text-primary text-center'>Calcul using states</h1>

        Nombre 1 : <input type="text"  value={n1}  onChange={(e)=>modf1(e)}/> &nbsp;&nbsp;
        Nombre 2 : <input type="text" value={n2} onChange={(e)=>modf2(e)} />&nbsp;&nbsp;

        <button className='btn btn-primary' onClick={somme} >Calcul</button>&nbsp;&nbsp;

        Resultat : <input type="text" value={result}  onChange={(e)=>modf3(e)} />
      
    </div>
  )
}
