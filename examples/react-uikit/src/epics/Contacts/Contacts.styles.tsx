import styled from "@emotion/styled";
import { TElementProps } from "../../definitions";

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
text-align: center;
background-color: lightgreen;
height: 95vh;
& > h1 {
    padding-top: 20vh;
};
`