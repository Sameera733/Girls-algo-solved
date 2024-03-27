function findGCD(a, b) {
    // Base case
    if (b === 0) {
        return a;
    } else {
        // Recursive case
        return findGCD(b, a % b);
    }
}

// Example usage
const num1 = 150;
const num2 = 35;
const gcdResult = findGCD(num1, num2);

console.log(`GCD of ${num1} and ${num2} is: ${gcdResult}`);