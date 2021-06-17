import { css } from '@emotion/react';

const BaseStyle = css`
    html {
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: bold;
        src: url('assets/fonts/ProximaNovaBold.eot');
        src: url('assets/fonts/ProximaNovaBold.woff') format('woff'),
            url('assets/fonts/ProximaNovaBold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: normal;
        src: url('assets/fonts/ProximaNovaRegular.eot');
        src: url('assets/fonts/ProximaNovaRegular.woff') format('woff'),
            url('assets/fonts/ProximaNovaRegular.woff2') format('woff2');
    }

    body {
        font: 14px 'Proxima Nova';
        color: #000;
    }

    html,
    body {
        box-sizing: border-box;
        position: relative;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    hr {
        display: block;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: auto;
        margin-right: auto;
        border: none;
        border-top: 1px solid #efecf5;
    }

    button,
    input,
    select {
        outline: none;
    }

    .root {
        width: 100vw;
        height: 100vh;
        position: absolute;
    }
`;

export default BaseStyle;
