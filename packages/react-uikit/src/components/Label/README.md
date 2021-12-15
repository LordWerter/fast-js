# Label Component

- [Label Component](#label-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Label on got props.

## Component Props

|   Name    |                      Type                       | Description              |         Example         |
| :-------: | :---------------------------------------------: | ------------------------ | :---------------------: |
|   text    |              `number` \| `string`               | Value of Label component |     `'Some value'`      |
|  sizeId   | TSize = `'mobile'` \| `'laptop'` \| `'desktop'` | Device used              |       `'mobile'`        |
| customize |                      `any`                      | Custom theme object      | `{customize.container}` |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Label} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Label />
    </>);
};

export default OurContainer;

```
