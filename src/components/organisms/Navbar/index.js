import React, { useRef, useEffect } from "react";
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import Hamburger from '../../atoms/Hamburger';
import List from '../../molecules/NavList';
import Button from '../../atoms/Button';

export default () => {
  const navRef = useRef(null);

  useEffect(() => {
    anime({
      targets: navRef.current,
      duration: 2000,
      delay: 200,
      opacity: 1,
      translateY: 50,
      easing: 'easeOutExpo'
    })    
  }, [navRef.current])

  return (
    <NavbarWrapper ref={navRef}>
        <Hamburger color='white' size='2x' />
        <List />
        <Button transparent title='Order Now' />
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 30px 5%;
  margin-top: -50px;
  opacity: 0;
`
