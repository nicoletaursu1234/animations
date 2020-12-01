import React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';

export default () => {
  return (
    <ButtonContainer>
      <Button title='Order Now'/>
      <Button transparent title='Details'/>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`