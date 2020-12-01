import React from "react";
import styled from 'styled-components';

export default ({ title }) => {
  return (
    <ListItem>{title}</ListItem>
  );
};

const ListItem = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin: 0 20px;
`
