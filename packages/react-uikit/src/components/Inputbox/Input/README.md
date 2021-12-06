# Input Component

- [Input Component](#input-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Input based on got props.

## Component Props

|     Name      |      Type       | Description                  |            Example            |
| :-----------: | :-------------: | ---------------------------- | :---------------------------: |
|    sizeId     |     `TSize`     | Device used                  |          `'mobile'`           |
|   customize   |      `any`      | Custom theme object          |    `{customize.container}`    |
|     label     |      `any`      | Path to image for background | `'../images/background1.png'` |
|     value     |    `string`     | Path to image for background | `'../images/background1.png'` |
|  placeholder  | `string | null` | Path to image for background | `'../images/background1.png'` |
|   disabled    |    `boolean`    | Path to image for background | `'../images/background1.png'` |
|    theme:     |       `{`       |                              |                               |
|   - wrapper   |     `any;`      |                              |                               |
|    - label    |     `any;`      |                              |                               |
|    - input    |     `any;`      |                              |                               |
| - placeholder |     `any;`      |                              |                               |
|               |   `} \| null;`   | Path to image for background | `'../images/background1.png'` |
|     label     |      `any`      | Path to image for background | `'../images/background1.png'` |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Input} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Input />
    </>);
};

export default OurContainer;

```
