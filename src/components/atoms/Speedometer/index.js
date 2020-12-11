import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default ({ height, width, color }) => {
  const animationRef = useRef(null);
  let timeline = anime.timeline({
    easing: 'easeOutCirc',
    loop: true,
  });

  useEffect(() => {
    if(animationRef.current) {
      timeline
        .add({
          targets: animationRef.current,
          duration: 2000,
          rotate: 20,
        }, 0)
        .add({
          targets: animationRef.current,
          rotate: -30,
          duration: 500,
        })
        .add({
          targets: animationRef.current,
          duration: 2000, 
          rotate: 50,
        })
        .add({
          targets: animationRef.current,
          duration: 500, 
          rotate: 30,
        })
        .add({
          targets: animationRef.current,
          duration: 2000, 
          rotate: 90,
        })
        .add({
          targets: animationRef.current,
          duration: 2000, 
          rotate: -90,
        })
    }
  }, [animationRef.current])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '150'}
      height={height || '150'}
      fill={color || 'none'}
      viewBox="0 0 300 193"
    >
      <path
      style={{ transformOrigin: '50% 80%', transform: 'rotate(-90deg)' }}
        ref={animationRef}
        fill="#fff"
        d="M160 150.2c0 5.412-4.253 9.8-9.5 9.8s-9.5-4.388-9.5-9.8c5.166-32.5 8.821-88.2 9.5-88.2.679 0 4.666 56.2 9.5 88.2z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M289.565 193c4.183-13.594 6.435-28.034 6.435-43C296 69.366 230.634 4 150 4S4 69.366 4 150c0 14.966 2.252 29.406 6.435 43h-4.18C2.184 179.379 0 164.945 0 150 0 67.157 67.157 0 150 0s150 67.157 150 150c0 14.945-2.185 29.379-6.254 43h-4.181z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

