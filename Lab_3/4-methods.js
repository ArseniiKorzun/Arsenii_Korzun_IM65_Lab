'use strict';

const methods = (iface) => {
  const result = [];
  for (const name of Object.keys(iface)) {
    const value = iface[name];
    if (typeof value === 'function') {
      result.push([name, value.length]);
    }
  }
  return result;
};

module.exports = { methods };
