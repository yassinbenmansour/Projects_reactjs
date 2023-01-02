import React, { useRef } from 'react'

export default function URef() {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    const nom = useRef();
    const prenom = useRef();
    const age = useRef();
    const ville = useRef();


    const show = () =>{


        nom.current.innerHTML=ref1.current.value;
        prenom.current.innerHTML=ref2.current.value;
        age.current.innerHTML=ref3.current.value;
        ville.current.innerHTML=ref4.current.value;

    }


  return (
    <div>
        <div className="container m-5 p-5 mx-auto d-block"></div>
        <h1>Entre votre information</h1>
        <form>
        <label className='form-label'>Nom :</label>
        <input className='form-control'  type="text" ref={ref1}  />
        <label className='form-label'>Prenom :</label>
        <input className='form-control' type="text" ref={ref2}  />
        <label className='form-label'>Age :</label>
        <input className='form-control' type="number" ref={ref3}  />
        <label className='form-label'>Ville :</label>
        <input className='form-control' type="text" ref={ref4}  />
<br />
<br />
        <input type="button" className='btn btn-primary' value="send" onClick={show}  />

      <h1>Votre nom est :</h1> <h4 ref={nom}>  </h4>
      <h1>Votre prenom est :</h1> <h4 ref={prenom}>  </h4>
      <h1>Votre age est :</h1> <h4 ref={age}>  </h4>
      <h1>Votre ville est :</h1> <h4 ref={ville}>  </h4>

    </form>


    </div>
  )
}
