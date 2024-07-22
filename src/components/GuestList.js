import React from 'react';

function GuestList({ guests, onEdit, onDelete }) {
  return (
    <ul>
      {guests.map((guest) => (
        <li key={guest.id} className="mb-2">
          {guest.name} - {guest.email}
          <button onClick={() => onEdit(guest)} className="ml-2 text-blue-500">Edit</button>
          <button onClick={() => onDelete(guest.id)} className="ml-2 text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default GuestList;



