// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Function to generate prime numbers less than N
  function generatePrimesLessThanN(N) {
    const primesLessThanN = [];
    for (let i = 2; i < N; i++) {
      if (isPrime(i)) {
        primesLessThanN.push(i);
      }
    }
    return primesLessThanN;
  }
  
  // Function to generate the first N prime numbers
  function generateFirstNPrimes(N) {
    const primes = [];
    let num = 2;
    while (primes.length < N) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  }
  
  // Example usage
  const N = 8;
  console.log(`Prime numbers less than ${N}:`, generatePrimesLessThanN(N));
  console.log(`First ${N} prime numbers:`, generateFirstNPrimes(N));