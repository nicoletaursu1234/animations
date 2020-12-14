import styled, { css, keyframes } from 'styled-components';

export const animation = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`
export const SVG = styled.svg`
  path {
    transition: fill 3s ease;
  }
  /* .wheel {
    transform-origin: 187px 215px;
    animation: 3 1s ${animation} ease-in-out;
  } */
`;