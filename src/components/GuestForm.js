import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { useNavigate, useLocation } from 'react-router-dom';

function GuestForm({ user }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.guest) {
      const { guest } = location.state;
      setName(guest.name);
      setEmail(guest.email);
      setId(guest.id);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const guestDoc = doc(db, "guests", id);
      await updateDoc(guestDoc, { name, email });
    } else {
      await addDoc(collection(db, "guests"), { name, email });
    }
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl mb-4">{id ? 'Edit Guest' : 'Add Guest'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default GuestForm;


