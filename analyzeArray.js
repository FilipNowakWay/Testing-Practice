export function analyzeArray(array){
    const average = getAverage(array);
    const min = getMin(array);
    const max = getMax(array);

    const object = {"average" : average,
        "min" : min,
        "max" : max,
        "length" : array.length,
    };

    return object;
}

export function getSum (array){
    return array.reduce((acc, curr) => {
        return acc += curr;
    },0);
}

export function getAverage(array){
    return getSum(array)/array.length;
}

export function getMin(array){
    return Math.min(...array);
}

export function getMax(array){
    return Math.max(...array);
}