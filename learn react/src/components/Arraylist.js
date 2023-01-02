import React from 'react'
import { useState } from 'react';

export default function Arraylist() {

    const [datalistt, setDatalistt] = useState([

        {nom:'yassine',prenom:'benmansour',ville:'rabat'},
        {nom:'hiba',prenom:'alkhal',ville:'sale'},
        {nom:'sofian',prenom:'hamii',ville:'sale'},
        {nom:'sara',prenom:'benmansour',ville:'rabat'},

    ]);
  return (
    <div>
            <h1>    list des etudiant :</h1>
        <ul>
            {
                datalistt.map((el,index)=>{
                    return <li key={index}> {index} Nom: {el.nom} - Prenom : {el.prenom} - ville : {el.ville} </li>
                })
            }
           
        </ul>
      
    </div>
  )
}
