import { css } from "@emotion/react";

export const resets = css`
* {                
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    height: 100vh;
    width: 100wh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;

export default resets;