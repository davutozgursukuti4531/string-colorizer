"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {string} string
 */
var _default = string => {
  for (let i = 0; i < 1000; i++) {
    return string.includes(`\x1b[${i}m`);
  }
};
exports.default = _default;