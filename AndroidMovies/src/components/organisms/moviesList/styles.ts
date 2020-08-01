import styled from 'styled-components/native';

export const MoviesListContainer = styled.ScrollView`
  background-color: #476576;
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
