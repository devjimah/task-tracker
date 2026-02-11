/**
 * Logger utility — provides structured console logging with severity levels.
 * Used for application-level monitoring and debugging.
 *
 * All log messages are prefixed with a timestamp and severity level.
 */

const LOG_LEVELS = { INFO: 'INFO', WARN: 'WARN', ERROR: 'ERROR', DEBUG: 'DEBUG' };

function formatMessage(level, message) {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] ${message}`;
}

export const logger = {
  info(message, ...args) {
    console.log(formatMessage(LOG_LEVELS.INFO, message), ...args);
  },

  warn(message, ...args) {
    console.warn(formatMessage(LOG_LEVELS.WARN, message), ...args);
  },

  error(message, ...args) {
    console.error(formatMessage(LOG_LEVELS.ERROR, message), ...args);
  },

  debug(message, ...args) {
    if (import.meta.env.DEV) {
      console.debug(formatMessage(LOG_LEVELS.DEBUG, message), ...args);
    }
  },
};
