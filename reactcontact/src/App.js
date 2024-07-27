import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Contact from './Contact';
import Search from './Search';
import { ContactList } from './ContactList';
function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get('http://localhost:8080/api/contacts');
      setContacts(response.data);
    };
    fetchContacts();
  }, []);

  const AddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const SearchResults = (results) => {
    setContacts(results);
  };
  return (
    <div className="App">
    <h1>Contact Manager</h1>
      <Contact onAddContact={AddContact} />
      <Search onSearchResults={SearchResults} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
