import React, { useState } from 'react'
import axios from 'axios'
const Contact = ({onAddContact}) => {
    const [name,setName]= useState('');
    const [phone,setPhone]= useState('');
    const [email,setEmail]= useState('');
 
    const submit= async (e)=>{
      e.preventDefault();
      const newContact = {name,email,phone};
      const response = await axios.post('http://localhost:8080/api/contacts',newContact);
    onAddContact(response.data)
    setName('');
    setEmail('');
    setPhone('');
    //hello this is the new 
    }
 
    return (
   
    <div>
 <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>

    </div>
  )
}

export default Contact