import { FilterInput } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <FilterInput
      type="text"
      placeholder="Name"
      pattern="^\D*$"
      onChange={e => onChange(e.target.value)}
    />
  );
};
