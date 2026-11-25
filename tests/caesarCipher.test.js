import {getCaesarCipher} from "../caesarCipher.js";

test("original letter size", () => expect(getCaesarCipher("aaBBccDDee",1)).toMatch("bbCCddEEff"));
test("original letter size", () => expect(getCaesarCipher("aaBB , DDee",1)).toMatch("bbCC , EEff"));

describe("caesarCipher key 1", () => {
    test("shift first 5 - abcde", () => expect(getCaesarCipher("abcde",1)).toMatch("bcdef"));
    test("shift first 5 - vwxyz", () => expect(getCaesarCipher("vwxyz",1)).toMatch("wxyza"));
    test("shift first 5 - vwxyz", () => expect(getCaesarCipher("aabbccddeeff",1)).toMatch("bbccddeeffgg"));
});

describe("caesarCipher key 3", () => {
    test("shift first 5 - abcde", () => expect(getCaesarCipher("abcde",3)).toMatch("defgh"));
    test("shift first 5 - vwxyz", () => expect(getCaesarCipher("vwxyz",3)).toMatch("yzabc"));
    test("shift first 5 - vwxyz", () => expect(getCaesarCipher("aabbccddeeff",3)).toMatch("ddeeffgghhii"));
});

describe("caesarCipher key 20", () => {
    test("shift first 5 - abcde", () => expect(getCaesarCipher("abcde",20)).toMatch("uvwxy"));
});