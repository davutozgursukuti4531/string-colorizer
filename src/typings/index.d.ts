declare module "string-colorizer"{
    class Colorizer<CC extends string[] = string[]>{
        public backgroundColors: Colors;
        public foregroundColors: Colors;
        public customColors: {
            [key in CC[keyof CC]]: (text: string) => string; 
        };
        public styles: Styles
        public ansiCodes: {
            foreground: {
                [key in keyof Colors]: string
            },
            background: {
                [key in keyof Colors]: string
            },
            custom: {
                [key in CC[keyof CC]]: string;
            },
            styles: {
                [key in keyof Styles]: string
            }
        }
        /**
         * You add a color to the customColors object
         */
        public addCustomRGBColors(name: string, background: boolean, rgb: [red: number, green: number, blue: number]): void
        /**
         * You add a color to the customColors object
         */
        public addCustomHexColors(name: string, background: boolean, hexCode: string): void
        /**
         * you check if the specified hex code is valid.
         */
        public isValidHex(string: string): boolean
        /**
         * you check if the specified string is colored or not.
         */
        public isColored(string: string): boolean
    }
    export interface Colors{
        /**
         * makes the color of the specified string black
         */
        black: (text: string) => string;
        /**
         * makes the color of the specified string red
         */
        red: (text: string) => string;
        /**
         * makes the color of the specified string green
         */
        green: (text: string) => string;
        /**
         * makes the color of the specified string yellow
         */
        yellow: (text: string) => string;
        /**
         * makes the color of the specified string blue
         */
        blue: (text: string) => string;
        /**
         * makes the color of the specified string magenta
         */
        magenta: (text: string) => string;
        /**
         * makes the color of the specified string cyan
         */
        cyan: (text: string) => string;
        /**
         * makes the color of the specified string white
         */
        white: (text: string) => string;
        /**
         * makes the color of the specified string gray
         */
        gray: (text: string) => string;
        /**
         * makes the color of the specified string crimson
         */
        crimson: (text: string) => string;
        /**
         * makes the color of the specified string purple
         */
        purple: (text: string) => string;
        /**
         * makes the color of the specified string orange
         */
        orange: (text: string) => string;
    }
    export interface Styles{
        /**
         * resets the color and style of the string you specify
         */
        reset: (text: string) => string;
        /**
         * brightens the characters in the string you specify
         */
        bright: (text: string) => string;
        /**
         * dims the characters in the string you specify
         */
        dim: (text: string) => string;
        /**
         * italicizes the characters in the string you specify
         */
        italic: (text: string) => string;
        /**
         * underscores the characters in the string you specify
         */
        underScore: (text: string) => string;
        /**
         * blinks the characters in the string you specify
         */
        blink: (text: string) => string;
        /**
         * reverses the foreground and background colors in the string you specify
         */
        reverse: (text: string) => string;
        /**
         * makes the characters in the string you specify invisible
         */
        hidden: (text: string) => string;
        /**
         * strikeThrough the characters in the string you specify
         */
        strikeThrough: (text: string) => string;
    }
    export default Colorizer
}