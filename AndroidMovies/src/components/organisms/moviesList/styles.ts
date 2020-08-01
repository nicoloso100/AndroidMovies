import styled from 'styled-components/native';

export const MoviesListContainer = styled.ScrollView<{darkTheme: boolean}>`
  background-color: ${(props) => (props.darkTheme ? '#476576' : '#EFEFEF')};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 30px;
  flex: 1;
`;

export const MoviesListSectionContainer = styled.View<{marginBottom?: string}>`
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : '5px'};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
