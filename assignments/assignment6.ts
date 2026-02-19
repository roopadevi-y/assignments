function isPrime(num: number): boolean {

    // Prime numbers are greater than 1
    if (num <= 1) {
        return false;
    }

    // Check divisibility from 2 to num - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Not prime
        }
    }

    return true; // Prime
}

// Test
let number: number = 7;

if (isPrime(number)) {
    console.log(`${number} is a Prime number`);
} else {
    console.log(`${number} is NOT a Prime number`);
}