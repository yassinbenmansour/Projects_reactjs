import React from 'react'
import { useState } from 'react';

export default function MyTable() {
    const [items, setItems] = useState([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]);
  
    const tableRows = items.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
      </tr>
    ));
  
    return (
      <table className='table table-danger'>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
  