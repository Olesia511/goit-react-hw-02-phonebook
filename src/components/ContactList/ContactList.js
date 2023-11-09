import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul style={{ maxWidth: 680 }}>
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
