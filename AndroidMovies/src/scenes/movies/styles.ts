import styled from 'styled-components/native';

export const ScreenContainer = styled.View<{darkTheme: boolean}>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.darkTheme ? '#032541' : '#FFFFFF')};
  flex: 1;
`;
