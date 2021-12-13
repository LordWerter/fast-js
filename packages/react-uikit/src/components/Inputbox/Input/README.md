# Input Component

- [Input Component](#input-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Input based on got props.

## Component Props
<!-- markdownlint-disable MD033 -->
|                                Name                                |                          Type                           | Description                  |            Example            |
| :----------------------------------------------------------------: | :-----------------------------------------------------: | ---------------------------- | :---------------------------: |
|                               sizeId                               |                         `TSize`                         | Device used                  |          `'mobile'`           |
|                             customize                              |                          `any`                          | Custom theme object          |    `{customize.container}`    |
|                               label                                |                          `any`                          | Path to image for background | `'../images/background1.png'` |
|                               value                                |                        `string`                         | Path to image for background | `'../images/background1.png'` |
|                            placeholder                             |                     `string | null`                     | Path to image for background | `'../images/background1.png'` |
|                              disabled                              |                        `boolean`                        | Path to image for background | `'../images/background1.png'` |
| theme: <br> - wrapper <br> - label <br> - input <br> - placeholder |  `null \|` <br> `any` <br> `any` <br> `any` <br> `any`  |                              |                               |
|                             customize                              |                          `any`                          | Path to image for background | `'../images/background1.png'` |
|                      withReset2EmptyValueBtn                       |                        `boolean`                        | Path to image for background | `'../images/background1.png'` |
|                     handleReset2EmptyValueBtn                      |                       `() => any`                       | Path to image for background | `'../images/background1.png'` |
|                              onChange                              | `(event: ChangeEvent<HTMLInputElement>) => any \| null` | Path to image for background | `'../images/background1.png'` |

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
