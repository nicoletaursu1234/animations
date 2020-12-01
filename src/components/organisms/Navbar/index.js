import React from "react";
import styled from 'styled-components';

import Hamburger from '../../atoms/Hamburger';
import List from '../../molecules/NavList';
import Button from '../../atoms/Button';

export default () => {
  return (
    <NavbarWrapper>
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
`
