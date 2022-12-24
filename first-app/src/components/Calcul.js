import React from 'react'

export default function Calcul() {
 
    const somme = ()=> {

        let sm = Number(document.getElementById('n1').value)+Number(document.getElementById("n2").value);
        document.getElementById('result').value=sm;

    }

  return (
    <div>
        <h1 className='text-primary text-center'>Calcul without states</h1>

        Nombre 1 : <input type="text"  id='n1'/> &nbsp;&nbsp;
        Nombre 2 : <input type="text" id='n2' />&nbsp;&nbsp;

        <button className='btn btn-primary' onClick={somme} value="somme">Calcul</button>&nbsp;&nbsp;
        
        Resultat : <input type="text" id='result' />
        
    </div>
  )
}
