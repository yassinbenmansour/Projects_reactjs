import React, { useRef } from 'react'

export default function Urefcheckbox() {

    const loisiresref=useRef([]);

    const addref = (el) => {
            loisiresref.current.push(el);
    }

    const checkall = () => {

        for (let i = 0  ;i < loisiresref.current.length ; i++) {
            loisiresref.current[i].checked=true;
            
        }
    }

    const uncheckall = () => {

        for (let i = 0  ;i < loisiresref.current.length ; i++) {
            loisiresref.current[i].checked=false;
            
        }
    }

    const valueschecked = () => {

        let showvalue = '' ;
        for (let i = 0  ;i < loisiresref.current.length ; i++) {
            if (loisiresref.current[i].checked)
            {
                showvalue += loisiresref.current[i].value;

            }
            
        }
        alert(showvalue)
    }
    
    
  return (
    <div>
        <h1>Multi checkbox </h1>

        <h1>Loisir :</h1>

        <input type="checkbox" value="sport" ref={addref} /> Sport <br /><br />
        <input type="checkbox" value="music" ref={addref}/> music<br /><br />
        <input type="checkbox" value="comedie" ref={addref} /> comedie<br /><br />
        <input type="checkbox" value="natation" ref={addref} /> natation<br /><br />


        <input type="button" value="checkall" className='btn btn-warning' onClick={checkall} /> <br /> <br />
        <input type="button" value="uncheckall" className='btn btn-warning' onClick={uncheckall}/> <br /><br />
        <input type="button" value="valueschecked" className='btn btn-warning' onClick={valueschecked}/>





    </div>
  )
}
