type TSectionName = 'core' | 'mobile' | 'laptop' | 'desktop';

type IElementTheme = {
  [key in TSectionName]: any;
};

type TElementProps = {
    theme: IElementTheme;
    [index: string]: any;
}

export const getCSSObj = (props: any): any => {
  return {
    ...props.theme.core,
    ...props.theme[props.sizeId],
  };
};

export default getCSSObj;