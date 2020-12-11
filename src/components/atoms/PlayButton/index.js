import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs/lib/anime.es.js';

export default ({ size, color }) => {
  const iconRef = useRef(null);

  const animate = () => {
    anime({
      targets: iconRef.current,
      rotate: 360,
      duration: 500,
    });
  }

  return (
    <IconBox onClick={animate}>
      <Icon forwardedRef={iconRef} icon={faPlay} size={size || '1'} color={color || 'white'} />
    </IconBox>
  )
}

const IconBox = styled.div`
  box-sizing: border-box;
  height: 66px;
  width: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px; 
  border: 1px solid white;
  border-radius: 50%;
`

const Icon = styled(FontAwesomeIcon)`
  padding: 25px;
`

