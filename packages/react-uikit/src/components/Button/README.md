# Button Component

- [Button Component](#button-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a button based on got props.

## Component Props

|   Name    |      Type      | Description                                       |      Example       |
| :-------: | :------------: | ------------------------------------------------- | :----------------: |
|   text    |    `string`    | A caption of a button                             |   `'Subscribe'`    |
|  sizeId   |    `TSize`     | Device used                                       |    `'desktop'`     |
| customize |     `any`      | Custom theme object                               |  `{theme.image}`   |
|  iconId   |    `string`    | Id of an button icon                              |     `'Icon1'`      |
|  onClick  | `EventHandler` | The event listener of mouse clicks                | `onClick={()=>{}}` |
|  onFocus  | `EventHandler` | The event listener of focus an element            | `onFocus={()=>{}}` |
|  onBlur   | `EventHandler` | The event listener of loss of focus of an element | `onBlur={()=>{}}`  |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Button} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Button />
    </>);
};

export default OurContainer;

```
