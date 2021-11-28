# Checkbox Component

- [Checkbox Component](#checkbox-component)
  - [Description](#description)
  - [Component Props](#component-props)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)

## Description

This component creates a custom checkbox based on got props.

## Component Props

| **Name**  |            **Type**            | **Description**                                                  |             **Example**              |
| :-------: | :----------------------------: | ---------------------------------------------------------------- | :----------------------------------: |
|   hash    |            `string`            | Identifier of a component                                        | `'8743b52063cd84097a65d1633f5c74f5'` |
|  sizeId   |            `TSize`             | Device used                                                      |              `'mobile'`              |
|   name    |            `string`            | A name of a component                                            |       `checkbox_${props.hash}`       |
|   label   |            `string`            | A name of a label                                                |              `'label1'`              |
| disabled  |           `boolean`            | Flag for determining the activity of the component.              |               `false`                |
| callback  | `(isChecked: boolean) => void` | A callback function that is called when the component is clicked |          `(isChecked)=>{}`           |
| onChange  |         `EventHandler`         | The event listener of changing of a component                    |         `onChange={()=>{}}`          |
| customize |             `any`              | Custom theme object                                              |           `{theme.image}`            |

## Usage

### Basic Usage

```typescript

import React from 'react';
import {Checkbox} from '@fast-js/react-uikit';

export const OurContainer: React.FC<TOurContainerProps> = (props): JSX.Element => {
    return (<>
        <Checkbox />
    </>);
};

export default OurContainer;

```
