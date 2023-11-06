export const ContactCard = ({
  contact: {
    contact: { id, name, number },
  },
  onDelete,
}) => {
  return (
    <li key={id} id={id}>
      <h3>
        {name} : {number}
      </h3>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
