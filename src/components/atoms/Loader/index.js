import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import styled from 'styled-components';

export default ({ isPlaying }) => {
  const animationRef = useRef(null);
  let timeline = anime.timeline({
    easing: 'linear',
    loop: true,
  });
  
  useEffect(() => {
    if (animationRef.current) {
      timeline
        .add({
          targets: animationRef.current,
          duration: 14000,
          width: '100%',
        }, 0)
    } 
    
  }, [animationRef.current])

  return (
    <Background>
      <Loader ref={animationRef}></Loader>
    </Background>
  )
}

const Background = styled.div`
  position: relative;
  margin-top: 30px;
  width: 200px;
  height: 5px;
  background-color: rgba(150,150,150,0.5);
  border-radius: 15px;
  overflow: hidden;
`

const Loader = styled.div`
  position: absolute;
  left: 0;
  width: 0;
  height: 5px;
  background-color: #ccc;
  z-index: 2;
`

