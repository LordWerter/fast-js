import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const reset = css`
* {                
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`;

export const Capp = styled.div`
    margin-left: 50px;
    line-height: 50px;
    & > .contactLink {
        margin-left: 50px;
    }
`