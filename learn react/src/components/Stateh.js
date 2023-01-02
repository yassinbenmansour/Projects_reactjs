import React from 'react'
import { useState } from "react";

export default function Stateh() {

    const [counter, setCounter] = useState(0);


    const inc = ()=>
    {
        let c ;
        c = counter;
        c++;
        setCounter(c);
    }

    const dec = ()=>
    {
        let c ;
        c = counter;
        c--;
        setCounter(c);
    }
  return (
    <div>

        <div className='container bg-dark text-center m-5 p-5'>
            <span> <button className='btn btn-danger btn-lg' onClick={dec}>-</button></span>
            <h1 className='text-info'>counter : {counter}</h1>
            <span><button className='btn btn-primary btn-lg' onClick={inc}>+</button></span>

            
        </div>
      
    </div>
  )
}
