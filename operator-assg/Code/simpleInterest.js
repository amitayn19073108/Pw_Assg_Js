function calculateSimpleInterest(principal, rate, time) {
  // Formula: Simple Interest = (Principal * Rate * Time) / 100
  const interest = (principal * rate * time) / 100;
  return interest;
}

console.log(calculateSimpleInterest(10000, 3, 5));
const principal = 5000;
const rate = 6;
const time = 4;
console.log(calculateSimpleInterest(principal, rate, time));

