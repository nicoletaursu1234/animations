import React, { useEffect, useRef, useState, useContext, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import { AnimationContext } from 'store/contexts';
import video from 'assets/video/bmw.mp4';
import Sidebar from 'components/organisms/Sidebar';
import { Footer, Navbar, RightContent } from 'components';

const HomePage = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const { dispatch, bgVisible } = useContext(AnimationContext);
  const history = useHistory();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const loadConfigPage = useCallback(() => {
    dispatch({ type: 'ANIMATION_END' });
    history.push('/config');
  }, [dispatch, history]);

  let timeline = anime.timeline({
    easing: 'easeInCirc',
  });

  useEffect(() => {
    if (videoRef.current && bgVisible) {
      timeline
        .add({
          targets: '.opacity',
          opacity: 1,
          duration: 1000,
        }, 0)
    }
  }, [videoRef.current, containerRef.current, bgVisible]);

  return (
    <Wrapper>
      <LoadingWrapper>
        <LoadingContainer flip={!bgVisible} onTransitionEnd={() => setIsAnimate(true)}>
          <StyledLoaderInner isAnimate={isAnimate} onAnimationEnd={loadConfigPage} />
        </LoadingContainer>
      </LoadingWrapper>

      <Container visible={bgVisible}>
        <Sidebar />
        <VideoWrapper>
          <Navbar />
          <RightContent />
          <OpacityContainer className='opacity'>
            <Video
              className='video__content'
              muted
              autoPlay
              loop
              ref={videoRef}>
              <source src={video} type='video/mp4' />
            </Video>
          </OpacityContainer>
          <Footer toggle={(isPlaying) => isPlaying ? videoRef.current.play() : videoRef.current.pause()} />
        </VideoWrapper>
      </Container>
    </Wrapper>
  );
};

const loadAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 40px;
  width: 500px;
  z-index: 2;
  perspective: 1000px;
  transform-origin: 50% 0;
`;

const LoadingContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 20px;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) rotateX(90deg);
  transition: opacity 0.3s ease, transform 0.6s cubic-bezier(.53,.15,.78,1.63);
  transform-style: preserve-3d;
  transform-origin: 50% 0;

  ${({ flip }) => flip && css`
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) rotateX(0);
  `}

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    border: 2px solid white;
    border-radius: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`

const StyledLoaderInner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: calc(100% + 40px);
  ${props => props.isAnimate && css`
    background: linear-gradient(45deg, #ffffff 0%, #ffffff 76%, transparent 76.1%, 
    transparent 79%, red 79.1%, red 84%, transparent 84.1%, transparent 87%, blue 87.1%, 
    blue 92%, transparent 92.1%, transparent 100%);
    animation: 1 4s ${loadAnimation} cubic-bezier(.51,.32,.5,.93);
  `}
`;

const Wrapper = styled.div`
background-color: black;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: filter 0.3s ease-in-out;
  ${props => !props.visible && css`
    filter: blur(10px);
  ` }
`
const VideoWrapper = styled.div`
  flex: 10;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: black;
`
const OpacityContainer = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;
`
const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export default HomePage;
