import React from 'react'
import { useState } from 'react';

export default function Condition() {
    const [toggle, setToggle] = useState(true);

    const change = () => {
        setToggle(!toggle);
    }

    let content = toggle ? <h1 className='text-primary'>Content True</h1> : <h1 className='text-danger'>Content False</h1>
    
  return (

    <div>


        {content}


        <button onClick={change} className="btn btn-info">Change content</button>

    </div>
  )
}
