# Modal Component

- [Modal Component](#modal-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom Modal on got props.

## Component Props

|     Name      |                      Type                       | Description               |           Example           |
| :-----------: | :---------------------------------------------: | ------------------------- | :-------------------------: |
|     text      |                    `string`                     | text content              |        `'some text'`        |
|    sizeId     | TSize = `'mobile'` \| `'laptop'` \| `'desktop'` | Device used               |         `'mobile'`          |
|   customize   |                      `any`                      | Custom theme object       |   `{customize.container}`   |
|     data      |                      `any`                      | Object with data for link | `{link, imageId, caption,}` |
| handleOnClick |                      `any`                      | Callback function         |      `handleOnClick()`      |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Modal} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Modal />
    </>);
};

export default OurContainer;

```
