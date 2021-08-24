import React from 'react';
import Catch from './FunctionalErrorBoundary';

type TProps = {
    children: React.ReactNode;
};

export const ErrorBoundary = Catch(function MyErrorBoundary(props: TProps, error?: Error) {
    if (error) {
        return (
            <div className='error-screen'>
                <h2>An error has occured</h2>
                <h4>{error.message}</h4>
            </div>
        );
    } else {
        return <>{props.children}</>;
    }
});

export default ErrorBoundary;
