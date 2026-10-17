'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip
    .split('.')
    .map(Number)
    .reduce((res, item) => (res << 8) + item, 0);

module.exports = { ipToInt };
