export const logTypes = {
    PRODUCTION: {
        EMERGENCY: true,
        ALERT: true,
        CRITICAL: true,
        ERROR: true,
        WARNING: false,
        NOTIFY: false,
        INFO: false,
        DEBUG: false,
    },
    TESTING: {
        EMERGENCY: true,
        ALERT: true,
        CRITICAL: true,
        ERROR: true,
        WARNING: true,
        NOTIFY: true,
        INFO: false,
        DEBUG: false,
    },
    DEVELOPMENT: {
        EMERGENCY: true,
        ALERT: true,
        CRITICAL: true,
        ERROR: true,
        WARNING: true,
        NOTIFY: true,
        INFO: true,
        DEBUG: false,
    },
    DEBUG: {
        EMERGENCY: true,
        ALERT: true,
        CRITICAL: true,
        ERROR: true,
        WARNING: true,
        NOTIFY: true,
        INFO: true,
        DEBUG: true,
    }
};

export default logTypes;
