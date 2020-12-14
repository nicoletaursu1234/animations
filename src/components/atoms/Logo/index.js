import React, { useRef, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import logo from 'assets/img/bmw-logo.png';

export default ({ height, width }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const logoRef = useRef(null);

  let timeline = anime.timeline();

  useEffect(() => {
    timeline.add({
      targets: logoRef.current,
      opacity: 1,
      duration: 1500,
      easing: 'cubicBezier(.69,.15,.75,.97)'
    }, 500)
  }, [logoRef.current])

  return (
    <Image
      ref={logoRef}
      onMouseEnter={() => setIsAnimate(true)}
      onAnimationEnd={() => setIsAnimate(false)}
      src={logo}
      height={height}
      width={width}
      isAnimate={isAnimate}
    />
  )
}

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  opacity: 0.1;
  ${(props) => (props.height && props.width) ? css`
    height: ${props.height};
    width: ${props.width};
  ` : css`
    height: 50px;
    width: 50px;
  `}
  ${({ isAnimate }) => isAnimate && css`
    animation: 1 1.5s ${rotate} cubic-bezier(.11,.85,.22,.79);
  `};
`