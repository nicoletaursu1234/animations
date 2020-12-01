import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default ({ size, color }) => {
  return (
    <Icon icon={faBars} size={size} color={color} />
  )
}

const Icon = styled(FontAwesomeIcon)`

`

