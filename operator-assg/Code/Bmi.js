function calculateBMI(weightinKg, height) {
    // the formula BMI = weight (kg)/height * height(m).

    const bmi = weightinKg / (height * height);
    return bmi;

    
}
console.log(calculateBMI(45, 1.7))
 
