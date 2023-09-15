import { mappings } from "./mappings";

export default function translate(input: string, to_unicode: boolean) :string {
    let output: string = "";

    if (to_unicode) {
        for (let character of input) {
            output += mappings.armascii8_to_unicode[character] || character

        }
    }
    else {
        for (let character of input) {
            output += mappings.unicode_to_armascii8[character] || character
        }
    }
    return output
}