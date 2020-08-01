import styled from 'styled-components/native';

export const CustomLabel = styled.Text<{weight: string}>`
  color: white;
  font-weight: ${(props) => props.weight};
`;
