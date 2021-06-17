/**
 * imports of packages
 */
import React, { createContext, useContext } from 'react';
import LogBuilder from '../LogBuilder';

export interface IProps {
    hostURL: string;
    seviceURL: string;
    children?: React.ReactNode;
}

export const LoggerContext = createContext({});
 
export const LogProvider: React.FC<IProps> = (props): JSX.Element => {
    const {
        hostURL,
        seviceURL,
        children,
    } = props;

    const logBuilder = new LogBuilder(`http://${hostURL}/${seviceURL}`);
    logBuilder.sendLog({
        module: 'LogProvider', 
        type: 'INFO', 
        description: 'LogProvider was started', 
        data: {url: logBuilder.url},
        date: new Date(),
    });
    return <LoggerContext.Provider  value={{logger: logBuilder}}>{ children }</LoggerContext.Provider>;
}
 
export default LogProvider;
 
 /**
  * hook to get Logger
  * @returns
  */
export const useLogger: any = () => {
    const context: any = useContext(LoggerContext);
    if (context === undefined)
        throw new Error('useActions must be used within ActionsProvider');
    return context.logger;
};
 