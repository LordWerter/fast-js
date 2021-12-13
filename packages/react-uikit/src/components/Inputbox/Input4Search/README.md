# Input4Search Component

- [Input4Search Component](#input4search-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Input4Search based on got props.

## Component Props
<!-- markdownlint-disable MD033 -->
|   Name    |                      Type                       | Description                                   |         Example         |
| :-------: | :---------------------------------------------: | --------------------------------------------- | :---------------------: |
|  sizeId   | TSize = `'mobile'` \| `'laptop'` \| `'desktop'` | Device used                                   |       `'mobile'`        |
|   value   |                    `string`                     | Value of Input4Search component               |     `'Some value'`      |
|  params   |                      `any`                      | Object with parameters                        | `{params.placeholder}`  |
|  onClick  |              `(event: any) => any`              | The event listener of clicking on a component |   `onClick={()=>{}}`    |
| customize |                      `any`                      | Custom theme object                           | `{customize.container}` |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Input4Search} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Input4Search />
    </>);
};

export default OurContainer;

```
