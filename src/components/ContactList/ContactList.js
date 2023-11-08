import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ contacts, onDelete }) => {
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
