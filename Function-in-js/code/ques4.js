function caculatetax(income) {
    if (income < 700000) {
        return `no tax`;
    }
    if (income > 700000 && income < 1000000) {
        return Math.round((income * 5) / 100);
    }
     if (income >= 1000000 && income < 1500000) {
        return Math.round((income * 10) / 100);
    }
     else {
           return Math.round((income * 20) / 100);
    }
}
console.log(caculatetax(2000000));
console.log(caculatetax(600000));
console.log(caculatetax(1200000));
