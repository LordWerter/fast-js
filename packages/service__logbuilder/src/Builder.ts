import { logLevels } from './Levels';

export type TInitLogPoint = 'EXEPTION' | 'RUNTIME' | 'TRACE' | 'BENCHMARK';

export interface ILogParams {
    initPoint: 'EXEPTION' | 'RUNTIME' | 'TRACE' | 'BENCHMARK';
    levelNumber: number;
    method: {
        path: string;
        name: string;
    },
    message: string;
    sendHandler?: (log: string) => any;
}

export class LogBuilder {

    public levels: any ={ ...logLevels };

    public url: string;

    constructor(url: string){
        this.url = url;
    }

    private wright2Console(logObj: any, logLevel: number) {
        const {
            module, 
            type, 
            description, 
            data
    } = logObj;
        if(logLevel < 3) {
            console.error(
                module, 
                type, 
                description, 
                data
            );
        } else if (logLevel === 4) {
            console.warn(
                module, 
                type, 
                description, 
                data
            );
        } else {
            console.log(
                module, 
                type, 
                description, 
                data
            );
        }
    }

    public sendLog = async (logObj: any, logFile = 'status', logLevel = 5) => {
        this.wright2Console(logObj, logLevel);
        return await fetch(`${this.url}/${logFile}`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(logObj),
        }).then(result => result.text());
    }
}

export default LogBuilder;
