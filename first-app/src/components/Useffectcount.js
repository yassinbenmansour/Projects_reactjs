import React, { useEffect, useState } from 'react'

export default function Useffectcount() {

    const [nbr,setNbr] = useState(0);

    

    useEffect(() => {
        document.title = `You clicked ${nbr} times`;
      }, [nbr]);


  return (
    <div>

                
        <p>You clicked {nbr} times</p>
            <button onClick={() => setNbr(nbr + 1)}>
                Click me
            </button>

    </div>
  )
}
