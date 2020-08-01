import styled from 'styled-components/native';

export const TitleComponent = styled.Text<{darkTheme: boolean}>`
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
  font-size: 30px;
`;
