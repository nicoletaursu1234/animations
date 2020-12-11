import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';

export default ({ size, color, onClick }) => {
  return (
    <IconBox onClick={onClick}>
      <Icon icon={faPause} size={size || '1'} color={color || 'white'}  />
    </IconBox>
  )
}

const IconBox = styled.div`
  box-sizing: border-box;
  height: 66px;
  width: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px; 
  border: 1px solid white;
  border-radius: 50%;
`

const Icon = styled(FontAwesomeIcon)`
  
`
