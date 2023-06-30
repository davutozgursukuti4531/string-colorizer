declare module "string-colorizer"{
    class Colorizer<CC extends string[] = string[]>{
        backgroundColors: Colors;
        foregroundColors: Colors;
        customColors: {
            [key in CC[keyof CC]]: (text: string) => string; 
        };
        styles: Styles
        ansiCodes: {
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
        addCustomRGBColors(name: string, background: boolean, rgb: [red: number, green: number, blue: number]): void
        addCustomHexColors(name: string, background: boolean, hexCode: string): void
        isValidHex(string: string): boolean
        isColored(string: string): boolean
    }
    export interface Colors{
        black: (text: string) => string;
        red: (text: string) => string;
        green: (text: string) => string;
        yellow: (text: string) => string;
        blue: (text: string) => string;
        magenta: (text: string) => string;
        cyan: (text: string) => string;
        white: (text: string) => string;
        gray: (text: string) => string;
        crimson: (text: string) => string;
        purple: (text: string) => string;
        orange: (text: string) => string;
    }
    export interface Styles{
        reset: (text: string) => string;
        bright: (text: string) => string;
        dim: (text: string) => string;
        italic: (text: string) => string;
        underScore: (text: string) => string;
        blink: (text: string) => string;
        reverse: (text: string) => string;
        hidden: (text: string) => string;
        strikeThrough: (text: string) => string;
    }
    export default Colorizer
}