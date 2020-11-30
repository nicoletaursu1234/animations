import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

import './main.scss';
import video from '../../../assets/video/bmw.mp4';

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

  }, [videoRef.current]);

  return (
    <div className='video' style={{height: '100vh', width: '100vw'}}>
      <video className='video__content' style={{height: '100%', width: '100%', objectFit: 'cover'}} src={video} muted ref={videoRef}></video>
    </div>
  );
};

export default HomePage;
