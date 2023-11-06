import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ contacts, onDelete }) => {
  // console.log(`onDelete`, contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <ContactCard
          key={contact.contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
