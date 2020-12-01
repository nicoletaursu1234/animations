import React from "react";
import styled, { css } from 'styled-components';

import ListItem from '../../atoms/ListItem';

export default () => {
  return (
    <List>
      <ListItem title='Home' />
      <ListItem title='Specifications' />
      <ListItem title='Configure now' />
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`
