// export type TGetResultStylesFunc<T> = (props: T) => Object;

export const getResultStyles = (props: any, pseudoClass?: string) => {

    if (
        Object.prototype.hasOwnProperty.call(props, 'isDisabled')
        && props.isDisabled === true
    ) return {
        ...props.theme.core,
        ...props.theme[props.sizeId],
        ...props.theme.isDisabled
    }

    if (
        Object.prototype.hasOwnProperty.call(props, 'isEnabled')
        && props.isEnabled === true
    ) return {
        ...props.theme.core,
        ...props.theme[props.sizeId],
        ...props.theme.isEnabled,
    }

    if (
        pseudoClass
        && Object.prototype.hasOwnProperty.call(props.theme, pseudoClass)
    ) return { ...props.theme[pseudoClass] }

    return {
        ...props.theme.core,
        ...props.theme[props.sizeId],
    }
}

export default getResultStyles;
