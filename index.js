// js

function add(addend1, addend2) {
    return addend1 + addend2; // sum
}

function subtract(minuend, sustraned) {
    return minuend - sustraned; // difference
}

function multiply(factor1, factor2) {
    return factor1 * factor2; // product
}

function divide(dividend, divisor) {
    return dividend / divisor; // quotient
}

function increment (num) {
    return ++num;
}

function decrement (num) {
    return --num;
}

function makeInt(string) {
    // NaN = not a number
    const base = 10; // radix, defaults to 10, but not always

    return parseInt(string, base);
}

function preserveDecimal(string) {
    return parseFloat(string);
}


