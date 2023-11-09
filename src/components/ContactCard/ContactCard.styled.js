import styled from 'styled-components';

export const CardItem = styled.li`
  width: auto;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  justify-content: start;
  align-items: center;
`;

export const BtnDeleteContact = styled.button`
  width: auto;
  height: auto;
  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};
  padding-left: ${p => p.theme.spacing(6)};
  padding-right: ${p => p.theme.spacing(6)};
  white-space: nowrap;
  border-radius: ${props => props.theme.radii.lg};
  margin-left: auto;

  &:hover {
    background-color: ${p => p.theme.colors.burgundy};
    color: ${p => p.theme.colors.beige};
  }
`;
