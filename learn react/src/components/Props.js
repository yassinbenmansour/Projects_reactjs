import React from 'react'

export default function Props({Fn , Ls , Gp, Nm}) {

    const alert=()=> {
       console.log("hello")
    }
  return (
    <div>
        
      <h1 style={{color:'red', textDecoration:'underline'}}  >hello my full name is  {Fn} {Ls} my groupe is :{Gp} num :{Nm} </h1>
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea harum et velit impedit enim non laboriosam doloremque, nostrum error nesciunt officiis voluptates nemo illo. Laboriosam recusandae eum natus ex quis!</p>
      
      <button onClick={alert} className="btn btn-primary" >click</button>

      <br />
      <br />


      <img src={'img.JPG'} className="rounded mx-auto d-block" style={{width:'170px',height:'170px'}} alt="" />




     
    </div>
  )
}
