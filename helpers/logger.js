const { format } = require('winston')
const winston = require('winston')

const myFormat = format.printf(({ level, message, timestamp }) => {
  return `${level}: ${message} ${timestamp}`;
});

module.exports = ((loggerFile) => {
  winston.clear()

  winston.add(new winston.transports.File({
    format: format.combine(format.timestamp(), format.simple(), format.colorize(), myFormat),
    filename: `logs/${loggerFile}.log`,
    level: 'info',
    handleExceptions: true
  }));

  var logger = winston
  logger.error = err => {
    if (err instanceof Error) {
      logger.log({ level: 'error', message: `${err.stack || err}` });
    } else {
      logger.log({ level: 'error', message: err });
    }
  };  

  return logger;
});
