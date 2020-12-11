import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import Arrow from '../../atoms/Arrow';
import Buttons from '../ButtonsContainer';


export default () => {
  const bgRef = useRef(null);
  const mainRef = useRef(null);
  const newRef = useRef(null);

  let timeline = anime.timeline({
    easing: 'easeOutExpo',
  });

  useEffect(() => {
    timeline
      .add({
        targets: bgRef.current,
        translateY: 50,
        opacity: 1,
        duration: 3000,
      }, 1500)
      .add({
        targets: newRef.current,
        translateX: 200,
        opacity: 1,
        duration: 3000,
      }, 2000)
      .add({
        targets: mainRef.current,
        translateX: 200,
        opacity: 1,
        duration: 3000,
      }, 1800)

  }, [bgRef.current, newRef.current, mainRef.current])

  return (
    <Wrapper>
      <StyledArrow size='2x' />
      <Container>
        <BackgroundText ref={bgRef}>F80</BackgroundText>
        <MainText ref={newRef}>New</MainText>
        <MainText ref={mainRef}>BMW M3</MainText>
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
  z-index: 2;
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
  top: -50px;
  left: -60px;
  bottom: 0;
  right: 0;
  opacity: 0;
  font-size: 380px;
  font-weight: bold;
  color: rgba(255,255,255,0.1);
  margin: 0;
  z-index: 1;
`
const MainText = styled.p`
  font-size: 50px;
  letter-spacing: 3px;
  margin-left: -200px;
  opacity: 0;
`
