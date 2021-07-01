import { ILogger } from '../../../core/AWSConnect';

export const initialLogs: ILogger = {
    enabled: false,
    mode: 'PROD',
    logFn: console.log,
};

export const testLogs: ILogger = {
    enabled: true,
    mode: 'DEV',
    logFn: console.log,
};

export default initialLogs;
