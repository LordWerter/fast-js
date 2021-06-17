import styled from '@emotion/styled';

interface ICWrapProps {
    bgColor?: string;
}

export const CWrap = styled.div<ICWrapProps>`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${(props: ICWrapProps) => (props.bgColor ? props.bgColor : 'transparent')};
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: flex-start;
    padding: 80px;
`;
