const isRationalNum = (num) => {
    return Number.isInteger(num);
}

const findRationalNum = (num1, num2, n) => {
    let difference = num2 - num1;
    let gaps = difference / (n + 1);

    let rationalNumbers = [];

    for(let i = 0; i <= n ; i++){
        let rationalNumber = num1 + i * gaps;
        rationalNumbers.push(rationalNumber);
    }
    return rationalNumbers;
}

console.log(isRationalNum(5));
console.log(findRationalNum(2/3, 5/6, 4));