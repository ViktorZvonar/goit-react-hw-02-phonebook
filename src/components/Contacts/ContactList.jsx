// import { nanoid } from 'nanoid';
// import css from './Form.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} name={contact.name} number={contact.number}>
          <p>
            {contact.name}: <span>{contact.number}</span>
          </p>
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
