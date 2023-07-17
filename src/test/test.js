import Colorizer from "string-colorizer";

const colorizer = new Colorizer();

console.log(colorizer.foregroundColors.red(`RED: AAAA, BLUE: ${colorizer.foregroundColors.blue("AAAA")} AAAA `))