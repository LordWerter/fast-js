import React from 'react';
import Catch from './FunctionalErrorBoundary';

export interface IProps {
    children: React.ReactNode;
};

export const ErrorBoundary = Catch(function MyErrorBoundary(props: IProps, error?: Error) {
    if (error) {
        return (
            <>
                <h2>An error has occured</h2>
                <h4>{error.message}</h4>
            </>
        );
    } else {
        return <>{props.children}</>;
    }
});

export default ErrorBoundary;
