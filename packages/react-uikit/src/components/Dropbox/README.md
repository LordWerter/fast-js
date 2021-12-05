# Dropbox Component

- [Dropbox Component](#dropbox-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Dropbox based on got props.

## Component Props

|    Name     |  Type   | Description         |         Example         |
| :---------: | :-----: | ------------------- | :---------------------: |
|   sizeId    | `TSize` | Device used         |       `'mobile'`        |
|  customize  |  `any`  | Custom theme object | `{customize.container}` |
| defaultItem |  `any`  | Default value       |      `{text, ...}`      |
|    data     |  `any`  | Items array         |  `[{item1}, {item2},]`  |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Dropbox} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Dropbox />
    </>);
};

export default OurContainer;

```
