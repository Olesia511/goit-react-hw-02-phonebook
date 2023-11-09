import { BtnDeleteContact, CardItem } from './ContactCard.styled';

export const ContactCard = ({
  contact: {
    contact: { id, name, number },
  },
  onDelete,
}) => {
  return (
    <CardItem key={id} id={id}>
      <h3>
        {name}: {number}
      </h3>
      <BtnDeleteContact type="button" onClick={onDelete}>
        Delete
      </BtnDeleteContact>
    </CardItem>
  );
};
