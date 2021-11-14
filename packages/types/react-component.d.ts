export type TComponentProps<TSize, TLangId, ReactNode> = {
    sizeId?: TSize;
    langId?: TLangId;
    customize?: {
      [key: string]: unknown;
    };
    children?: ReactNode;
};
  
export type THTMLElementProps<TSize, TTheme> = {
    sizeId: TSize;
    theme: TTheme;
};
