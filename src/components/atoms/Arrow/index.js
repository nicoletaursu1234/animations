import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

export default ({ size, color }) => {
  return (
    <Icon icon={faLongArrowAltLeft} size={size} color={color}></Icon>
  )
}

const Icon = styled(FontAwesomeIcon)`

`
