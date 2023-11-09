import { ContactCard } from 'components/ContactCard/ContactCard';
import { ListPhoneContact } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListPhoneContact>
      {contacts.map(contact => (
        <ContactCard
          key={contact.contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ListPhoneContact>
  );
};
