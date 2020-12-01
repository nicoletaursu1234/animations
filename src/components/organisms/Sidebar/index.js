import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styled, { css } from 'styled-components';

import Logo from '../../atoms/Logo';
import SidebarInfo from '../../molecules/SidebarInfo';

export default () => {
  return (
    <SidebarWrapper className='video'>
      <Logo height='70' width='70' />
      <SidebarInfo />
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  height: 100vh;
  min-width: 250px;
  background-color: black;
  display: flex;
  flex-direction: column;
  flex: 2.5;
  padding: 30px 0 0 50px;
`
