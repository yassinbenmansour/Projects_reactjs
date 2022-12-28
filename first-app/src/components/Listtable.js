import { useState } from "react";

export default function Listtable() {

    const [listtable, setListtable] = useState([
        {product:"kawkaw",categorie:"momalahat",prix:"10DH"},
        {product:"louz",categorie:"momalahat",prix:"20DH"},
        {product:"garg3",categorie:"momalahat",prix:"30DH"},
        {product:"akajo",categorie:"momalahat",prix:"40DH"},
        {product:"fraise",categorie:"fruit",prix:"50DH"},
        {product:"pomme",categorie:"fruit",prix:"70DH"}
    ]);

    

  return (
        
    <>
      <h1>    Table product :</h1>
        <table className="table table-bordered ">
           
           <tr className="table-primary bg-danger">
            <th>id</th>
            <th>product</th>
            <th>categorie</th>
            <th>prix</th>
           </tr>


      {
        listtable.map((element,id)=>{
          return <tr key={id}>
            <td>{id}</td>
            <td>{element.product}</td>
            <td>{element.categorie}</td>
            <td>{element.prix}</td>
          </tr>

        })
      }
           
        </table>
    
    </>
  )
}
