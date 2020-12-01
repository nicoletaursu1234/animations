import React from 'react';
import styled, { css } from 'styled-components';

export default ({ transparent, title }) => {
  return (
    <Button transparent={transparent}>{title}</Button>
  )
}

const Button = styled.div`
  background-color: white;
  color: black;
  width: 200px;
  height: 40px;
  margin-right: 5px;
  font-size: 14px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  z-index: 2;
  ${props => props.transparent && css`
    background-color: rgba(0,0,0,0);
    color: white;
    border: 2px solid white;
    height: 36px;
  `}
`