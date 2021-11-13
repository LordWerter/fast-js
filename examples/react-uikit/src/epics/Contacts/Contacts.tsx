import { useTheme } from '@emotion/react';
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Contacts.styles'

export type IProps = TElementProps;

const Contacts: React.FC<IProps> = (): JSX.Element => {
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.Contacts };
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <h1>Contact us!</h1>
            <div className="textContent">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est dolores, unde similique hic vero dicta aspernatur, ipsum molestiae laborum eos blanditiis laudantium maxime? Error a sit temporibus, reiciendis dolor inventore, soluta assumenda ut ex dolorum expedita vel quisquam. Recusandae cumque blanditiis vel voluptatem similique. Dolore iste aliquid tenetur asperiores.
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio libero molestias natus odit, rerum similique esse reiciendis voluptas corrupti eaque vero repellendus aliquid consectetur iste laboriosam nobis nemo nostrum architecto cupiditate voluptates provident veritatis sit inventore. Itaque velit veritatis, eligendi suscipit expedita reprehenderit error! Enim est vel quos explicabo.
                </div>
            </div>
        </CWrap>
    );
};

export default Contacts;