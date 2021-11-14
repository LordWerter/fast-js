import React from 'react';
import { useTheme } from '@emotion/react';

import { CWrap, SectionContent, Title, Description } from './Section.styles';

export type IProps = TComponentProps;

export const Section: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId, langs, children } = props;

    // @ts-ignore
    const theme = { ...useTheme().Section[sectionType] };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} data-testid={'section__cwrap'}>
            <SectionContent sizeId={sizeId} theme={theme.sectioncontent} data-testid={'section__section-content'}>
                <Title sizeId={sizeId} theme={theme.title} data-testid={'section__title'}>
                    {langs.title}
                </Title>
                <Description sizeId={sizeId} theme={theme.description} data-testid={'section__description'}>
                    {langs.description}
                </Description>
                {children}
            </SectionContent>
        </CWrap>
    );
};

export default Section;
