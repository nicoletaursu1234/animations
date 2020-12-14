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
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px) !important;
    opacity: 0.7 !important;
  }
`
