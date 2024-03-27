/*function gcd(a, b) {
    // Base case
    if (b === 0) {
        return a;
    }
    
    // Recursive case
    return gcd(b, a % b);
}

// Example usage:
const num1 = 24;
const num2 = 36;
const result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${result}`);*/


function Gcd(num1,num2){
    if(num2==0){
        return num1;
    }
    else{
        return Gcd(num2,num1 %num2);
    }
}
console.log(Gcd(24,36))
