import { capitalize, reverseString } from "../string";

test("capitalize", () => expect(capitalize("asd")).toBe("ASD"));

test("reverseString", () => expect(reverseString("asd")).toBe("dsa"));
