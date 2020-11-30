import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

const HomePage = () => {
  const animationRef = useRef(null);


  useLayoutEffect(() => {
    if (animationRef.current) {
      anime({
        targets: animationRef.current,
        translateX: 250,
        duration: 2000,
        delay: 300,
      });
    }
    
  }, [animationRef.current]);

  return (
      <svg
        className="box"
        width="250"
        height="150"
        viewBox="0 0 252 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={animationRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H218.776L252 32.8308V152H13.7629L0 138.4V0ZM2 2V137.565L14.5844 150H250V33.6662L217.955 2H2ZM5.68862 5.6213H215.483L246.618 36.388L244.798 145.787H17.6551L5.68862 133.962V5.6213ZM7.68862 7.6213V133.127L18.4766 143.787H242.831L244.604 37.2096L214.661 7.6213H7.68862Z"
          fill="#A0EEFF"
        />
      </svg>
  );
};

export default HomePage;
