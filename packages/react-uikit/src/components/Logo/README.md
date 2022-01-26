# Logo Component

- [Logo Component](#logo-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Logo on got props.

## Component Props

|   Name    |                      Type                       | Description         |         Example         |
| :-------: | :---------------------------------------------: | ------------------- | :---------------------: |
|  sizeId   | TSize = `'mobile'` \| `'laptop'` \| `'desktop'` | Device used         |       `'mobile'`        |
| customize |                      `any`                      | Custom theme object | `{customize.container}` |
|   curID   |                 TLogoRenderType                 | Id of logo image    |     `'ICON__COLOR'`     |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Logo} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Logo />
    </>);
};

export default OurContainer;

```
