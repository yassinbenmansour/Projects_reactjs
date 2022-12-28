import { useRef } from 'react';

export default function URef() {
const ref1 = useRef();
const refdiv = useRef();

const show = () => {
    alert("la valeur de l'input est : " + ref1.current.value);
    refdiv.current.innerHTML=ref1.current.value;
}

  return (
    <div>



        <input type="text"  ref={ref1} placeholder="enter value .." />
        <br />
        <input type="button" className='btn btn-primary' onClick={show} value="send"/>

        <div ref={refdiv}>

        </div>

    </div>

  )
}
