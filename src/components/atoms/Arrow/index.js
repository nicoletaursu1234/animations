import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs/lib/anime.es.js';

export default ({ size, color }) => {
  const arrowRef = useRef(null);

  const timeline = anime.timeline({
    easing: 'easeOutExpo'
  });

  useEffect(() => {
    timeline.add({
      targets: arrowRef.current,
      duration: 1000,
      opacity: 1,
      translateX: -50,
    }, 1000)
  }, [arrowRef.current])

  return (
    <Wrapper ref={arrowRef}>
      <Icon icon={faLongArrowAltLeft} size={size || '1x'} color={color || 'white'}></Icon>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  margin-left: 50px;
  opacity: 0;
`

const Icon = styled(FontAwesomeIcon)`
`
