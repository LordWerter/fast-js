import { useTheme } from '@emotion/react';
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Footer.styles';

export type IProps = TElementProps & React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<IProps> = (props): JSX.Element => {
   const fullTheme = useTheme();
   //@ts-ignore
   const theme = {...fullTheme.Footer};
   return (
      <CWrap sizeId={'desktop'} theme={theme.cwrap}>
         <h1>FOOTER</h1>
         <h1>FOOTER</h1>
         <h1>FOOTER</h1>
      </CWrap>
   )
}

export default Footer;
