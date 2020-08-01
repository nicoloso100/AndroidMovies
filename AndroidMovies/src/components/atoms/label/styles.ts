import styled from 'styled-components/native';

export const CustomLabel = styled.Text<{weight: string; darkTheme: boolean}>`
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
  font-weight: ${(props) => props.weight};
`;
