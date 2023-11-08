export const Filter = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Name"
      onChange={e => onChange(e.target.value)}
    />
  );
};
