import React, { useState, useEffect, useRef } from "react";
import { CirclePicker } from 'react-color';
import styled, { css, keyframes } from 'styled-components';
import animejs from 'animejs/lib/anime.es.js';

import stage from 'assets/img/stage.jpg';
import { Car, Window } from 'components';

const ConfigPage = () => {
  const [color, setColor] = useState('#fff');
  const [loadComplete, setLoadComplete] = useState(false);
  const pageRef = useRef(null);

  return (
    <Wrapper ref={pageRef} loadComplete={loadComplete} >
      <CarWrapper>
        <Car color={color} />
        <Window color={color} />
      </CarWrapper>
        <CirclePicker styles={{ zIndex: 5 }} color={color} onChangeComplete={color => setColor(color.hex)} />
    </Wrapper>
  );
};

const animation = keyframes`
  from {
    filter: blur(10px)
  } 
  to {
    filter: blur(0);
  }
`

const CarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: url(${stage}) center;
  background-size: contain;
  background-repeat: repeat-x;
  ${({ loadComplete }) => !loadComplete && css`;
    animation: 1 1.5s ${animation} ease-in-out;
  `}
`
export default ConfigPage;
