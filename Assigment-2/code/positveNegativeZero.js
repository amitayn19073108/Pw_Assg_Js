function positveNegativeOrZero(n) {
    let res =  n < 0 ? "Negative" : n > 0 ? "Positive" : "Zero";
    return res;
}

console.log(positveNegativeOrZero(0))
console.log(positveNegativeOrZero(10))
console.log(positveNegativeOrZero(-4))