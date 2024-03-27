// iski wazahat karo sameeraaa

function isPrime(N) {
    // Check if N is less than 2
    if (N <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // Check for divisibility
    for (let i = 2; i * i <= N; i++) {
        if (N % i === 0) {
            return false; // If N is divisible by any number between 2 and its square root, it's not prime
        }
    }

    return true; // If no divisor found, N is prime
}

// Test the function
let numberToCheck = 17; // Change this number to test for different values
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " is prime.");
} else {
    console.log(numberToCheck + " is not prime.");
}

