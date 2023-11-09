import styled from 'styled-components';
export const BasicContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacing(4)};
  gap: ${props => props.theme.spacing(4)};
  font-weight: 700;
  background-color: ${p => p.theme.colors.purple};
  color: ${p => p.theme.colors.beige};
`;
