import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Home({ user }) {
  const [guests, setGuests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchGuests();
    }
  }, [user]);

  const fetchGuests = async () => {
    const querySnapshot = await getDocs(collection(db, "guests"));
    setGuests(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const addGuest = async (guest) => {
    await addDoc(collection(db, "guests"), guest);
    fetchGuests();
  };

  const updateGuest = async (id, updatedGuest) => {
    const guestDoc = doc(db, "guests", id);
    await updateDoc(guestDoc, updatedGuest);
    fetchGuests();
  };

  const deleteGuest = async (id) => {
    const guestDoc = doc(db, "guests", id);
    await deleteDoc(guestDoc);
    fetchGuests();
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Wedding Guest List</h1>
      <button onClick={() => navigate('/form')} className="bg-blue-500 text-white p-2 mb-4">Add Guest</button>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id} className="mb-2">
            {guest.name} - {guest.email}
            <button onClick={() => navigate('/form', { state: { guest } })} className="ml-2 text-blue-500">Edit</button>
            <button onClick={() => deleteGuest(guest.id)} className="ml-2 text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;




