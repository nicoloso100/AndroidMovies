import styled from 'styled-components/native';

export const ButtonContainer = styled.View<{darkTheme: boolean}>`
  background-color: ${(props) => (props.darkTheme ? '#444444' : '#C4C4C4')};
  color: white;
  border-radius: 20px;
  width: 170px;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const ButtonText = styled.Text<{darkTheme: boolean}>`
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
  font-size: 15px;
  text-align: center;
`;
