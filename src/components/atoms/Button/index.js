import React, { useRef, useState, useEffect, useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import { AnimationContext } from 'store/contexts';


export default ({ transparent, title }) => {
  const context = useContext(AnimationContext);
  console.log('Context:', context);
  const [isAnimate, setIsAnimate] = useState(false);
  const { dispatch } = useContext(AnimationContext);
  const animationRef = useRef(null);

  const timeline = anime.timeline();

  useEffect(() => {
    if (isAnimate) {
      timeline.add({

      })
    }
  })
  return (
    <Button
      transparent={transparent}
      onClick={() => setIsAnimate(true)}
      onAnimationEnd={() => setIsAnimate(false)}
      isAnimate={isAnimate}
    >
      {title}
    </Button>
  )
}

const animate = keyframes`
  
`

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
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    opacity: 0.8;
    transition: 0.3s ease-in-out;
  }
`