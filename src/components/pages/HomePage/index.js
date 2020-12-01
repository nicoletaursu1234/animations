import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styled, { css } from 'styled-components';

import video from '../../../assets/video/bmw.mp4';
import Sidebar from '../../../components/organisms/Sidebar';
import Navbar from '../../../components/organisms/Navbar';

const HomePage = () => {
  const videoRef = useRef(null);

  return (
    <Wrapper className='video'>
      <Sidebar />
      <VideoWrapper>
        <Navbar />
        <Video
          className='video__content'
          muted
          autoPlay
          loop
          ref={videoRef}>
          <source src={video} type='video/mp4' />
        </Video>
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
`

const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export default HomePage;
