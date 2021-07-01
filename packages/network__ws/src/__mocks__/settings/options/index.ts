import debug, { testDebug } from "./debug";
import exit, { testExit } from "./exit";
import logs, { testLogs } from "./logs";
import reconnect, { testReconnect } from "./reconnect";

export const testOptions = {
    debug: testDebug,
    exit: testExit,
    logs: testLogs,
    reconnect: testReconnect,
};

export const initialOptions = {
    debug,
    exit,
    logs,
    reconnect,
};

export default initialOptions;
