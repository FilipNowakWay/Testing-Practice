const alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

export function getCaesarCipher(str,key){
    const result = str.split("").map((char) => {
        const currentIndex = alphabet.indexOf(char.toLowerCase());
        const shiftedIndex = (currentIndex + key) % 26;
        const shiftedChar = alphabet[shiftedIndex];

        if (currentIndex === -1) return char;

        return char === char.toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar;
    }).join("");
    return result;
}