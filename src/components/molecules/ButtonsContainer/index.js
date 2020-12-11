import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import Button from '../../atoms/Button';

export default () => {
  const buttonsRef = useRef(null);

  let timeline = anime.timeline({
    easing: 'easeOutExpo',
  });

  useEffect(() => {
    timeline.add({
      targets: buttonsRef.current,
      translateX: -100,
      opacity: 1,
      duration: 3000
    }, 1300)
  }, [buttonsRef.current])

  return (
    <ButtonContainer ref={buttonsRef}>
      <Button title='Order Now'/>
      <Button transparent title='Details'/>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 100px;
  opacity: 0;
  z-index: 2;
`