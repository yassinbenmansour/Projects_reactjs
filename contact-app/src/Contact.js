import React from 'react'
import ContactItem from "./ContactItem"

function Contact() {
    return (
        <div className ="container">
             <div className = "row my-5">
                <div className = "col-md-6 mx-auto">
                    <div className ="card bg">
                        <table class ="table">
                            <thead>
                                <tr>
                                    <th> Nom et Prénom</th>
                                    <th> Téléphone </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contactArray.map((contact , index) => (
                                        <ContactItem key={index} contact ={contact} />
                                    ))                              
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
             </div>
        </div>
    )
}

const contactArray =  [
    {
        "name" : "halima smadi",
         phone  : "062288292929"
    },
    {
        "name" : "aya benzouina",
         phone : "029283838388"
    },
    {
        "name" : "moad radouani ",
         phone  : "033635353663"
    }
]

export default Contact ;