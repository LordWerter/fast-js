import host, { testHost } from './host';
import options, { testOptions } from './options';

export const initialSettings = {
    host,
    options,
};

export const testSettings = {
    host: { ...testHost },
    options: { ...testOptions },
};

export default initialSettings;
