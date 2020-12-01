import React from 'react';
import styled, { css } from 'styled-components';

import logo from '../../../assets/img/bmw-logo.png';

export default ({ height, width }) => {
  return (
    <Image src={logo} height={height} width={width} />
  )
}

const Image = styled.img`
  ${(props) => (props.height && props.width) ? css`
    height: ${props.height};
    width: ${props.width};
  ` : css`
    height: 50px;
    width: 50px;
  `}
`