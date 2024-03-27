function findGCD(arr) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    if (arr.length < 2) {
        return "Array should have at least two numbers.";
    }

    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }

    return result;
}

// Example 
const numbers = [12, 18, 24];
const resultGCD = findGCD(numbers);
console.log("GCD:", resultGCD);