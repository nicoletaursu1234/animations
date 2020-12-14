import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs/lib/anime.es.js';

export default ({ size, color }) => {
  const [animate, setAnimate] = useState(false);
  const arrowRef = useRef(null);
  const timeline = anime.timeline({
    easing: 'easeOutExpo'
  });

  useEffect(() => {
    timeline.add({
      targets: arrowRef.current,
      duration: 500,
      opacity: 1,
      translateX: -50,
    }, 500)
  }, [arrowRef.current])

  return (
    <Wrapper ref={arrowRef} animate={animate} onMouseEnter={() => setAnimate(true)}>
      <Icon icon={faLongArrowAltLeft} size={size || '1x'} color={color || 'white'}></Icon>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  margin-left: 50px;
  opacity: 0;
  z-index: 10;
  transition: opacity 0.3s ease-in-out, transform 0.7s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translate(-45px) !important;
    opacity: 0.7 !important;
  }
`

const Icon = styled(FontAwesomeIcon)`
`
