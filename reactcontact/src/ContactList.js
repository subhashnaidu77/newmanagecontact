import React from 'react'

export const ContactList = ({contacts}) => {
  return (
    <div>
            <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.email} - {contact.phone}
        </li>
      ))}
    </ul>
    </div>
  )
}
