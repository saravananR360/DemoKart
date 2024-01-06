import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const PageName = styled.h1`
  font-family: inherit;
  color: #e5de00;
`;

export const MenuButton = styled(Button)`
  color: white;
  display: inline-block;
  padding: 12px;
  font-family: inherit;
`;

export const NavBox = styled(Box)`
  ${({ display }) => `display : ${display ? display : "flex"}`};
  ${({ height }) => `height : ${height ? height : "auto"}`};
  ${({ width }) => `width : ${width ? width : "auto"}`};
  cursor: ${({ cursor }) => cursor && cursor};

  ${({ position }) => `position : ${position ? position : "relative"}`};
  ${({ backcolor }) =>
    backcolor &&
    `
    background-color: ${backcolor};    
    `}
  ${({ $aligncenter }) =>
    $aligncenter &&
    `
    align-items: center;
    justify-content: center;
    `}
    ${({ $centerbetween }) =>
    $centerbetween &&
    `
    align-items: center;
    justify-content: space-between;
    `}
   
    ${({ $column }) =>
    $column &&
    `
    align-items: start;
    flex-direction : column;
    `}

  ${({ $round }) =>
    $round &&
    `
    border-radius: 50%;    
    `}
`;
