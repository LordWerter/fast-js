# Counter Component

- [Counter Component](#counter-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Counter based on got props.

## Component Props

|       Name       |              Type              | Description             |             Example             |
| :--------------: | :----------------------------: | ----------------------- | :-----------------------------: |
|      sizeId      |            `TSize`             | Device used             |           `'mobile'`            |
|    customize     |             `any`              | Custom theme object     |      `{customize.button}`       |
|   productCode    |            `string`            | Identifier of a product |           `product1`            |
|      count       |            `number`            | Value of the counter    |             `21251`             |
| handleMinusCount | `(productCode: string) => any` | Decrementing function   | `handleMinusCount(productCode)` |
| handlePlusCount  | `(productCode: string) => any` | Incrementing function   | `handlePlusCount(productCode)`  |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Counter} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Counter />
    </>);
};

export default OurContainer;

```
