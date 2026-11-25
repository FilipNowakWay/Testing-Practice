import {analyzeArray, getSum, getAverage,getMin,getMax} from "../analyzeArray.js";

const object = [1,8,3,4,2,6];
const negatives = [-10, -2, -5, -3];
const zeros = [0, 0, 0, 0];

test("first analyzeArray test", () => {
    expect(analyzeArray(object)).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test("Negative analyzeArray test", () => {
    expect(analyzeArray(negatives)).toStrictEqual({
        average: -5,
        min: -10,
        max: -2,
        length: 4,
    });
});

test("All Zeros analyzeArray test", () => {
    expect(analyzeArray(zeros)).toStrictEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 4,
    });
});

describe("seprate functions of analyzeArray test", () => {
    test("sum array", () => {
    expect(getSum(object)).toBe(24);
});

test("average array", () => {
    expect(getAverage(object)).toBe(4);
});

test("min array", () => {
    expect(getMin(object)).toBe(1);
});

test("max array", () => {
    expect(getMax(object)).toBe(8);
});
})


