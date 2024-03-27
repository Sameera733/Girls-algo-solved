// Function to find the Greatest Common Divisor (GCD) of two numbers
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Function to find the LCM of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Function to find the LCM of an array of numbers
function findLCM(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result = lcm(result, arr[i]);
    }

    return result;
}

const numbers = [4,6,8,14];
const resultLCM = findLCM(numbers);

console.log(`LCM of ${numbers} is: ${resultLCM}`);