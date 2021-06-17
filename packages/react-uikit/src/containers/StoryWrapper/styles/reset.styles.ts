import { css } from '@emotion/react';

const ResetStyle = css`
    a {
        background: transparent; // IE10
        text-decoration: none;

        &:visited {
            color: #000;
        }
    }

    html,
    body {
        box-sizing: border-box;
        padding: 0!important;
        width: 100vw;
        height: 100vh;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    nav,
    section,
    summary {
        display: block;
    }

    p,
    ul,
    ol,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    body,
    fieldset,
    blockquote {
        margin: 0;
    }

    ul,
    ol,
    fieldset {
        padding: 0;
    }

    fieldset,
    img {
        border: 0;
    }

    li {
        list-style: none;
    }

    // ------------------------------------------
    // Typography
    //-------------------------------------------

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font: inherit;
    }

    button,
    input[type='button'],
    input[type='reset'],
    input[type='submit'],
    input[type='radio'] {
        color: inherit;
        cursor: pointer;
        font: inherit;
        padding: 0;
    }

    // ------------------------------------------
    // Tables
    //-------------------------------------------

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    // ------------------------------------------
    // Other
    //-------------------------------------------

    q {
        quotes: '«' '»';
    }

    @media (max-width: 480px) {
        .ScrollbarsCustom {
            height: 91vh !important;
            margin-top: 4px;
        }
    }
`;

export default ResetStyle;
