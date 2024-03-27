function isprimeornot(n){
  if(n<2)
  return `${n} is not prime`

  for(i=2;i<n;i++){
    if(n%i===0){
      return `${n} is not prime number`
    }
  }
  return `${n} is prime number`
}
console.log(isprimeornot(11))
//Check if 7 is divisible by 2. It's not.
// Check if 7 is divisible by 3. It's not.
// Check if 7 is divisible by 4. It's not.
// Check if 7 is divisible by 5. It's not.
// Check if 7 is divisible by 6. It's not.
// Check if 7 is divisible by 7. It is.