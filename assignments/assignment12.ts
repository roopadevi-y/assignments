//Step1 : for Positive number as  power
function power(base: number, exponent: number): number 
{
    // step1 : If exponent is 0 
    if (exponent === 0) 
        return 1;

    let result = 1;
    let positiveExponent = exponent > 0 ? exponent : -exponent;

    // step 2: If exponent is positive
    for (let i = 1; i <= positiveExponent; i++) {
        result = result * base;
    }

    // step 3: If exponent is negative
    return exponent < 0 ? 1 / result : result;
}

// to print result
console.log(power(2.00000, 10));   // Output: 1024.00000
console.log(power(2.10000, 3));   // Output: 9.26100
console.log(power(2.00000, -2));  //Output: 0.25000