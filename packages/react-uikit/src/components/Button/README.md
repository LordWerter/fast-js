# Button Component

## Description

## Component Props

```table

|───────────────|─────────────────|─────────────────────────────────|────────────────────────|
|     Name      |      Type       |           Description           |        Example         |
|───────────────|─────────────────|─────────────────────────────────|────────────────────────|
|     text      |      string     |      A caption of a button      |        'Subscribe'     |
|───────────────|─────────────────|─────────────────────────────────|────────────────────────|
|     sizeId    |      TSize      |           Device used           |        'Desktop'       |
|───────────────|─────────────────|─────────────────────────────────|────────────────────────|
|     customize |      any        |     Customize theme object      |     `{theme.image}`    |
|───────────────|─────────────────|─────────────────────────────────|────────────────────────|
|     iconId    |      string     |      Id of an button icon       |        Example         |
|───────────────|─────────────────|─────────────────────────────────|────────────────────────|
|     onClick   |   EventHandler  |  The event listener of mouse    |    `onClick={()=>()}`  |          
|               |                 |  clicks                         |                        |
|───────────────|─────────────────|─────────────────────────────────|────────────────────────|
|     onFocus   |   EventHandler  |  The event listener of focus    |    `onFocus={()=>()}`  |
|               |                 |  an element                     |                        |
|───────────────|─────────────────|─────────────────────────────────|────────────────────────|
|     onBlur    |   EventHandler  |  The event listener of loss     |    `onBlur={()=>()}`   |
|               |                 |  of focus of an element         |                        |
|───────────────|─────────────────|─────────────────────────────────|────────────────────────|


```

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
