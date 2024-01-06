import { Box } from "@mui/material";
import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px;
  background-color: #f4f4f4;
`;

export const PageTitle = styled.h2`
  ${({ color }) => `color : ${color ? color : "#036C6B"}`};
`;

export const Para = styled.p`
  width: ${({ width }) => (width ? width : "50%")};
  margin-right: ${({ mr }) => mr && mr};
  margin-left: ${({ ml }) => ml && ml};
  padding-right: ${({ pr }) => pr && pr};
  padding-left: ${({ pl }) => pl && pl};
  ${({ color }) => color && `color :  ${color}`};
  ${({ textDecoration }) =>
    textDecoration && `text-decoration:  ${textDecoration}`};
`;

export const FlexBox = styled(Box)`
  ${({ display }) => `display : ${display ? display : "flex"}`};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  margin-top: ${({ mt }) => mt && mt};
`;

export const Image = styled.img`
  height: ${({ height }) => (height ? height : "20em")};
  width: ${({ width }) => (width ? width : "15em")};
  border-radius: 8px;
`;

export const PaperBox = styled(Paper)`
  padding: ${({ padding }) => (padding ? padding : "1em")};
  margin: ${({ margin }) => (margin ? margin : "1em")};
  width: 350px;
  height: 550px;
  ${({ cursor }) => cursor === "true" && `cursor : pointer`};
`;
