import styled from 'styled-components/native';

export const MovieDetailsContainer = styled.View<{darkTheme: boolean}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.darkTheme ? '#476576' : '#EFEFEF')};
`;
