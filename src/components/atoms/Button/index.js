import React, { useRef, useState, useEffect, useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { AnimationContext } from 'store/contexts';


export default ({ transparent, title }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const { dispatch } = useContext(AnimationContext);

  return (
    <Button
      transparent={transparent}
      onClick={() => {
        setIsAnimate(true);
        dispatch({ type: 'ANIMATION_START' })
      }}
      onAnimationEnd={() => setIsAnimate(false)}
      isAnimate={isAnimate}
    >
      {title}
    </Button>
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
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    opacity: 0.8;
    transition: 0.3s ease-in-out;
  }
`