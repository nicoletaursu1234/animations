import React, { useEffect, useRef, useState } from "react";
import styled, { css } from 'styled-components';

export default () => {
  const [animate, setAnimate] = useState(false);
  const [{ content, index }, setContent] = useState({ content: '', index: 0 });
  const animationRef = useRef(null);
  const text =
    "With a low-slung silhouette, long bonnet and the distinct three-dimensionality of all the body parts, the design of the F80 series is particularly emotional and striking..."

  useEffect(() => {
    setTimeout(() => setAnimate(true), 3000);
    if (animate) {
      if (index == text.length) {
        setAnimate(false);
        return;
      }

      const delay = setTimeout(() => {
        setContent({ content: content + text[index], index: index + 1 })
        clearTimeout(delay)
      }, 50)
    }


  }, [animate, content])



  return (
    <SidebarWrapper ref={animationRef}>
      <div>
        <Text>{content}</Text>
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 45vh;
`

const Text = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 12px;
  letter-spacing: 1.4px;
  padding: 10px 10px;
  margin-right: 20px;
`
