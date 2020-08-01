import styled from 'styled-components/native';

export const CustomText = styled.Text<{darkTheme: boolean}>`
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
  font-size: 15px;
  line-height: 25px;
`;
