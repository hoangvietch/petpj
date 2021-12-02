import fs from 'fs';
import colors from 'colors';

const getActualRequestDurationInMilliseconds = (start) => {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

const logger = (req, res, next) => {
  const current_datetime = new Date();
  const formatted_date = `${current_datetime.getFullYear()}-${
    current_datetime.getMonth() + 1
  }-${current_datetime.getDate()} ${current_datetime.getHours()}:${current_datetime.getMinutes()}:${current_datetime.getSeconds()}`;
  const { method } = req;
  const { url } = req;
  const status = res.statusCode;
  const start = process.hrtime();
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
  const log = `[${colors.green(formatted_date)}] ${colors.blue(
    method,
  )}:${url} ${status} ${colors.red(
    durationInMilliseconds.toLocaleString(),
  )} ms`;
  console.log(log);
  fs.appendFile('logs/request_logs.txt', `${log}\n`, (err) => {
    if (err) {
      console.log(err);
    }
  });
  next();
};

export default logger;
