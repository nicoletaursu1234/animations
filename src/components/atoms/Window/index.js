import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BlockPicker } from 'react-color';

const Window = ({ color,  ...props }) => {
  const [windowColor, setWindowColor] = useState('#13316A');
  const [isShow, setIsShow] = useState(false);

  return (
    <WindowWrapper>
      <SVG
        width={865}
        height={276}
        viewBox="0 0 865 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          onMouseEnter={() => !isShow && setIsShow(true)}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M581.549 112.978l-362.5-18c-3.333.333-10.5-1.1-12.5-9.5-2.5-10.5-3-13.5 6.5-20 1.124-.77 2.354-1.65 3.704-2.62 10.064-7.214 26.879-19.268 57.296-25.88 27.6-6 77.5-8 112.5-6.5 5.179.41 10.142.692 15.002.967 24.699 1.4 46.739 2.648 80.998 20.033 33.5 17 51 26 51.5 27.5.4 1.2 1.5 18.833 2 27.5l45.5 2.5v4zM323 34.5l21.369 61.87 186.5 9.5-1.5-25C520 75.498 513 71.498 487.5 58.498l-1.365-.695c-27.656-14.106-40.171-20.49-92.766-22.933-29.488-1.37-52.864-1.23-70.369-.37zm-3 0l21.37 61.87-115.001-5c-1.172-.079-2.309-.119-3.4-.157-5.89-.208-10.444-.368-11.969-6.213l-.054-.205c-2.947-11.297-2.996-11.482 10.424-20.925C234.203 54.839 258.5 41.5 285.5 38c20.94-2.715 25.117-2.945 29.842-3.206A215.26 215.26 0 00320 34.5z"
          fill="url(#prefix__paint16_linear)"
        />
        <path
          d="M341.626 96.503l-21.469-61.85c-8.408.63-7.536 0-34.659 3.5-27.125 3.498-51.534 16.833-64.426 25.86-13.482 9.44-13.433 9.626-10.472 20.919l.054.205c1.815 6.925 7.906 5.868 15.44 6.367l115.532 5zM344.639 96.503l-21.468-61.85c17.586-.86 41.07-1 70.694.37 53.699 2.483 65.81 9.033 94.565 23.621 25.618 12.996 32.65 16.994 42.063 22.364L532 106l-187.361-9.497z"
          fill={windowColor}
        />
        <path
          d="M341.626 96.503l-21.469-61.85c-8.408.63-7.536 0-34.659 3.5-27.125 3.498-51.534 16.833-64.426 25.86-13.482 9.44-13.433 9.626-10.472 20.919l.054.205c1.815 6.925 7.906 5.868 15.44 6.367l115.532 5z"
          fill="url(#prefix__paint17_linear)"
          fillOpacity={0.3}
        />
        <path
          d="M344.639 96.503l-21.468-61.85c17.586-.86 41.07-1 70.694.37 53.699 2.483 65.81 9.033 94.565 23.621 25.618 12.996 32.65 16.994 42.063 22.364L532 106l-187.361-9.497z"
          fill="url(#prefix__paint18_linear)"
          fillOpacity={0.3}
        />
        
        <path
          d="M563.336 103.661c-.396 9.041-8.627 8.861-23.71 8.2-15.084-.662-19.524-3.183-19.128-12.225.397-9.041 5.538-14.903 16.8-14.037 18.233 1.403 26.435 9.02 26.038 18.062z"
          fill="url(#prefix__paint21_radial)"
        />
        <path
          d="M563.553 98.72c-.496 11.311-8.176 11.201-22.246 10.584-14.07-.617-18.18-3.708-17.683-15.019C524.12 82.975 529 75.573 539.5 76.5c17 1.5 24.549 10.91 24.053 22.22z"
          fill={color}
        />
        <path
          d="M563.553 98.72c-.496 11.311-8.176 11.201-22.246 10.584-14.07-.617-18.18-3.708-17.683-15.019C524.12 82.975 529 75.573 539.5 76.5c17 1.5 24.549 10.91 24.053 22.22z"
          fill="url(#prefix__paint22_radial)"
          fillOpacity={0.4}
        />
        <defs>
        <linearGradient
            id="prefix__paint16_linear"
            x1={388.5}
            y1={104.5}
            x2={390}
            y2={28}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B1B1B1" />
            <stop offset={1} stopColor="#CFCFCF" />
          </linearGradient>
          <linearGradient
            id="prefix__paint18_linear"
            x1={370.5}
            y1={34}
            x2={370.5}
            y2={106}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#858585" />
          </linearGradient>
          <radialGradient
            id="prefix__paint21_radial"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(127.648 242.173 181.119) scale(22.102 36.3206)"
          >
            <stop />
            <stop offset={1} stopColor="#586294" stopOpacity={0} />
          </radialGradient>
          <radialGradient
            id="prefix__paint22_radial"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(107.103 242.33 248.91) scale(20.4022 24.9998)"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#979797" />
          </radialGradient>
        </defs>
      </SVG>

      <Picker isShow={isShow} onMouseLeave={() => isShow && setIsShow(false)} >
        {isShow && <BlockPicker color={windowColor} onChangeComplete={color => {
          setIsShow(false);
          setWindowColor(color.hex);
        }} />}
      </Picker>
    </WindowWrapper>
  );
};

const Picker = styled.div`
  position: absolute;
  left: 356px;
  top: 120px;
  opacity: 0;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease;
  ${({ isShow }) => isShow ? css`
    opacity: 1;
  ` : css `
    opacity: 0;
  `}
`;

const WindowWrapper = styled.div`
  position: absolute;
  width: 865px;
  height: 276px;
  z-index: 10;
`;

const SVG = styled.svg`
  path {
    transition: fill 3s ease;
  }
`;

export default Window;