function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Test the function with different inputs
var input1 = 5;
var input2 = 0;
var input3 = 8;

console.log("Factorial of", input1, "is", factorial(input1));
console.log("Factorial of", input2, "is", factorial(input2));
console.log("Factorial of", input3, "is", factorial(input3));
