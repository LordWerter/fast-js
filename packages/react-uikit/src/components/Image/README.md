# BgImage Component

- [BgImage Component](#bgimage-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Background Image based on got props.

## Component Props

|   Name    |   Type   | Description                  |            Example            |
| :-------: | :------: | ---------------------------- | :---------------------------: |
|  sizeId   | `TSize`  | Device used                  |          `'mobile'`           |
| customize |  `any`   | Custom theme object          |    `{customize.container}`    |
|  bgImage  | `string` | Path to image for background | `'../images/background1.png'` |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {BgImage} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <BgImage />
    </>);
};

export default OurContainer;

```
