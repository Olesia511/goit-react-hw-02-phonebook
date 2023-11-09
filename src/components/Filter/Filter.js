import { FilterInput } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <FilterInput
      type="text"
      placeholder="Name"
      onChange={e => onChange(e.target.value)}
    />
  );
};
