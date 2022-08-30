import React from 'react'

function ContactItem(props) {
    return (
        <tr>
            <td> {props.contact.name} </td>
            <td> {props.contact.phone}</td>
            <td>
                <span style={{cursor : "pointer"}} className = "badge badge-danger font-weight-bold p-2"> &times;</span>
            </td>
        </tr>
    );
    
}

export default ContactItem;