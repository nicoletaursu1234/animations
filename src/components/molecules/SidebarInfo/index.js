import React from 'react';
import styled from 'styled-components';

import Arrow from '../../atoms/Arrow';
import Buttons from '../ButtonsContainer';

export default () => {
  return (
    <Wrapper>
      <StyledArrow size='2x' />
      <Container>
        <BackgroundText>F80</BackgroundText>
        <MainText>New</MainText>
        <MainText>BMW M3</MainText>
        <Buttons />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50px;
  height: 400px;
  width: 40%;
`
const StyledArrow = styled(Arrow)`
  margin-top: 20px;
`
const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BackgroundText = styled.p`
  position: absolute;
  top: 0;
  left: -60px;
  bottom: 0;
  right: 0;
  font-size: 380px;
  font-weight: bold;
  color: rgba(255,255,255,0.1);
  margin: 0;
  z-index: 1;
`
const MainText = styled.p`
  font-size: 50px;
  letter-spacing: 3px;
`