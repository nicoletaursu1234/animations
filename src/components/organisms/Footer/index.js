import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import PauseButton from '../../atoms/PauseButton';
import PlayButton from '../../atoms/PlayButton';
import Loader from '../../atoms/Loader';
import Speedometer from '../../atoms/Speedometer';

export default (props) => {
  const [isPlaying, setIsPlaying] = useState(() => true);
  const footerRef = useRef(null);

  useEffect(() => {
    anime({
      targets: footerRef.current,
      duration: 2000,
      delay: 200,
      opacity: 1,
      translateY: -50,
      easing: 'easeOutExpo'
    })    
  }, [footerRef.current])

  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
    props.toggle(!isPlaying);
  }

  return (
    <FooterWrapper ref={footerRef}>
      <div onClick={toggleIsPlaying}>
        {isPlaying ? (
          <PauseButton />
        ) : (
            <PlayButton />
          )}
      </div>
      <Loader isPlaying={isPlaying} />
      <Speedometer />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 15px 5%;
  z-index: 2;
  margin-bottom: -50px;
  opacity: 0;
`
