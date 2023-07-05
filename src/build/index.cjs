"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isValidHex = _interopRequireDefault(require("./Utils/isValidHex.cjs"));
var _isColored = _interopRequireDefault(require("./Utils/isColored.cjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const foregroundColors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",
  crimson: "\x1b[38m"
};
const backgroundColors = {
  black: "\x1b[40m",
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[44m",
  magenta: "\x1b[45m",
  cyan: "\x1b[46m",
  white: "\x1b[47m",
  gray: "\x1b[100m",
  crimson: "\x1b[48m"
};
const styles = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underScore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikeThrough: "\x1b[9m"
};
const someRGBColors = {
  purple: [255, 0, 255],
  orange: [255, 128, 0]
};
const someBackgroundRGBColors = {
  purple: [255, 0, 255],
  orange: [255, 128, 0]
};
/**
 * 
 * @param {object} obj 
 * @param {object} list 
 */
function colorGenerator(obj, list) {
  for (const v of Object.getOwnPropertyNames(list)) {
    Object.defineProperty(obj, v, {
      value: function (text) {
        return list[v] + text + "\x1b[0m";
      },
      configurable: false,
      writable: false
    });
  }
}
function ansiCodeGenerator(obj, list) {
  for (const v of Object.getOwnPropertyNames(list)) {
    Object.defineProperty(obj, v, {
      value: list[v],
      configurable: false,
      writable: false
    });
  }
}
/**
 * 
 * @param {object} obj 
 * @param {boolean} background 
 * @param {object} list 
 */
function RGBcolorGenerator(obj, background, list) {
  for (const v of Object.getOwnPropertyNames(list)) {
    Object.defineProperty(obj, v, {
      value: function (text) {
        return `\x1b[${background === true ? 48 : 38};2;${list[v][0]};${list[v][1]};${list[v][2]}m` + text + "\x1b[0m";
      },
      configurable: false,
      writable: false
    });
  }
}
class Colorizer {
  constructor() {
    colorGenerator(this.foregroundColors, foregroundColors);
    colorGenerator(this.backgroundColors, backgroundColors);
    colorGenerator(this.styles, styles);
    ansiCodeGenerator(this.ansiCodes.foreground, foregroundColors);
    ansiCodeGenerator(this.ansiCodes.background, backgroundColors);
    ansiCodeGenerator(this.ansiCodes.styles, styles);
    RGBcolorGenerator(this["foregroundColors"], false, someRGBColors);
    RGBcolorGenerator(this["backgroundColors"], true, someBackgroundRGBColors);
  }
  backgroundColors = {};
  foregroundColors = {};
  customColors = {};
  styles = {};
  ansiCodes = {
    foreground: {},
    background: {},
    custom: {},
    styles: {}
  };
  /**
   * @param {string} name
   * @param {boolean} background
   * @param {Array<number>} rgb
   */
  addCustomRGBColor(name, background, rgb) {
    Object.defineProperty(this.ansiCodes.custom, name, {
      value: function (text) {
        return `\x1b[${background === true ? 48 : 38};2;${rgb[0]};${rgb[1]};${rgb[2]}m` + text + "\x1b[0m";
      }
    });
    Object.defineProperty(this.ansiCodes.custom, name, {
      value: `\x1b[${background === true ? 48 : 38};2;${rgb[0]};${rgb[1]};${rgb[2]}m`
    });
  }
  /**
   * 
   * @param {string} name 
   * @param {boolean} background 
   * @param {string} hexCode 
   * @returns 
   */
  addCustomHexColor(name, background, hexCode) {
    if (!(0, _isValidHex.default)(hexCode)) return;
    var red;
    var green;
    var blue;
    hexCode = hexCode.replace("#", "");
    if (hexCode.length === 6) {
      red = parseInt(hexCode.substring(0, 2), 16);
      green = parseInt(hexCode.substring(2, 4), 16);
      blue = parseInt(hexCode.substring(4, 6), 16);
    } else {
      red = parseInt(hexCode.substring(0, 1) + hexCode.substring(0, 1), 16);
      green = parseInt(hexCode.substring(1, 2) + hexCode.substring(1, 2), 16);
      blue = parseInt(hexCode.substring(2, 3) + hexCode.substring(2, 3), 16);
    }
    this.addCustomRGBColor(name, background, [red, green, blue]);
    return;
  }
  /**
   * 
   * @param {string} hexCode 
   * @param  {string} text 
   * @returns 
   */
  isValidHex = _isValidHex.default;
  isColored = _isColored.default;
}
var _default = Colorizer;
exports.default = _default;