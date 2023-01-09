import React from 'react'
import { Link } from 'react-router-dom'

 function Menu() {
  return (
    <div>
      <h1>Nav bar</h1>

      <Link to="/Profil">profil</Link>
      <Link to="/Er">Erreur</Link>
      
    </div>
  )
}


export default Menu ;