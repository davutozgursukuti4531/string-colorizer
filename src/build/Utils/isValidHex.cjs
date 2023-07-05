"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * @param {string} string
 */
var _default = string => {
  if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(string)) return false;
  string = string.replace('#', '');
  if (string.length !== 3 && string.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/.test(string) || /^[0-9A-Fa-f]{3}$/.test(string);
};
exports.default = _default;