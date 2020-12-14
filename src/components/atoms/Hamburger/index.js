import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default ({ size, color }) => {
  return (
    <Icon icon={faBars} size={size} color={color} />
  )
}

const Icon = styled(FontAwesomeIcon)`
  display: block;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px) !important;
    opacity: 0.7 !important;
  }
`

