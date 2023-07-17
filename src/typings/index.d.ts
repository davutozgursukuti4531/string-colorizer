declare module "string-colorizer"{
    class Colorizer<CC extends string[] = string[]>{
        public backgroundColors: Colors;
        public foregroundColors: Colors;
        public customColors: {
            [key in CC[keyof CC]]: (...text: unknown[]) => string; 
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
        public addCustomRGBColor<K extends keyof typeof this.customColors>(name: K, background: boolean, rgb: [red: number, green: number, blue: number]): void
        public addCustomRGBColor(name: string, background: boolean, rgb: [red: number, green: number, blue: number]): void
        /**
         * You add a color to the customColors object
         */
        public addCustomHexColor<K extends keyof typeof this.customColors>(name: K, background: boolean, hexCode: string): void
        public addCustomHexColor(name: string, background: boolean, hexCode: string): void
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
        black: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string red
         */
        red: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string green
         */
        green: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string yellow
         */
        yellow: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string blue
         */
        blue: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string magenta
         */
        magenta: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string cyan
         */
        cyan: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string white
         */
        white: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string gray
         */
        gray: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string crimson
         */
        crimson: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string purple
         */
        purple: (...text: unknown[]) => string;
        /**
         * makes the color of the specified string orange
         */
        orange: (...text: unknown[]) => string;
    }
    export interface Styles{
        /**
         * resets the color and style of the string you specify
         */
        reset: (...text: unknown[]) => string;
        /**
         * brightens the characters in the string you specify
         */
        bright: (...text: unknown[]) => string;
        /**
         * dims the characters in the string you specify
         */
        dim: (...text: unknown[]) => string;
        /**
         * italicizes the characters in the string you specify
         */
        italic: (...text: unknown[]) => string;
        /**
         * underscores the characters in the string you specify
         */
        underScore: (...text: unknown[]) => string;
        /**
         * blinks the characters in the string you specify
         */
        blink: (...text: unknown[]) => string;
        /**
         * reverses the foreground and background colors in the string you specify
         */
        reverse: (...text: unknown[]) => string;
        /**
         * makes the characters in the string you specify invisible
         */
        hidden: (...text: unknown[]) => string;
        /**
         * strikeThrough the characters in the string you specify
         */
        strikeThrough: (...text: unknown[]) => string;
    }
    export default Colorizer
}