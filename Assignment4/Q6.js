// Function to check if a number is prime
function isPrime(num) {
    if (num <= 2) return false;
    for (let i = 2; i< num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Function to generate prime numbers less than N
  function generatePrimesLessThanN(N) {
    let primes = [];
    for (let i = 2; i < N; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  // Function to generate the first N prime numbers
  function generateNPrimesInRange(start, N) {
    const primes = [];
    for (let i = start; primes.length < N; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  // Example usage
//   let N = 20;
  console.log(`Prime numbers less than ${10}: ${generatePrimesLessThanN(10)}`);
  console.log(`First ${10} prime numbers starting from 2: ${generateNPrimesInRange(2, 10)}`);
  