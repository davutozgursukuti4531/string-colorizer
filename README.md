# string-colorizer

Basic, Convenient and Optimized, an ansi-based string colorizer.

# features

- Optimized on CJS and ESM
- You can add your custom colors.
- Type-Safe



# Usage
```js
// esm and ts
import Colorizer from "string-colorizer"
/**
 * const Colorizer = require("string-colorizer").default
 * on commonjs
 * 
*/
const colorizer = new Colorizer()
const { styles } = colorizer


console.log(colorizer.foregroundColors.red("Red"))
console.log(styles.strikeThrough(colorizer.foregroundColors.blue("Blue with Strike-Through")))
console.log(colorizer.ansiCodes.foregroundColors.red)
```
- This module is supported Custom Color Typing with [TypeScript](https://www.typescriptlang.org/)
```ts
const colorizer = new Colorizer<["customWhite", "cyan"]>()

colorizer.addCustomHexColor("cyan", false, "#00e3fd")
console.log(colorizer.foregroundColors.red("Red"))
console.log(colorizer.customColors.cyan("Cyan"))
console.log(styles.strikeThrough(colorizer.foregroundColors.blue("Blue with Strike-Through")))
console.log(colorizer.ansiCodes.foregroundColors.red)
```

# Contact

- [Discord](https://discord.com/users/586995957695119477)