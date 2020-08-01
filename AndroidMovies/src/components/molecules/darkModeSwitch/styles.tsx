import styled from 'styled-components/native';

export const DarkModeSwitchContainer = styled.View<{darkMode: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.darkMode ? '#444444' : '#ececec')};
  height: 50px;
`;
