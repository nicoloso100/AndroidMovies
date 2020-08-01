import styled from 'styled-components/native';

export const ImageContainer = styled.Image<{
  customwidth: string;
  customheight: string;
  radius: string;
}>`
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.customwidth};
  height: ${(props) => props.customheight};
`;
