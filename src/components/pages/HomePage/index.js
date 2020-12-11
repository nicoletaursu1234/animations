import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styled, { css } from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import video from 'assets/video/bmw.mp4';
import Sidebar from 'components/organisms/Sidebar';
import { Footer, Navbar, RightContent } from 'components';

const HomePage = () => {
  const videoRef = useRef(null);

  let timeline = anime.timeline({
    easing: 'easeInCirc',
  });

  useEffect(() => {
    if (videoRef.current) {
      timeline
        .add({
          targets: '.opacity',
          opacity: 1,
          duration: 1000,
          loop: false,
        }, 0)
    }
  }, [videoRef.current])

  return (
    <Wrapper className='video'>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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
