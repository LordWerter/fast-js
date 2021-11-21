import { css } from "@emotion/react";

export const resets = css`
* {                
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    line-height: 1;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;

export default resets;