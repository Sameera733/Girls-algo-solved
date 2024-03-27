function isPrime(num){
    if(num<2){
    return `${num} is not a prime number`
    }
for (let i=2;i<num;i++){
    if(num%i ===0){
        return `${num} is not a prime number`
    }
}
return `${num} is a prime number`
}
 console.log(isPrime(53));

 function prime(num){
    if(num<=2){
        return `${num} is not a prime number`
    }
    for (let i=2;i<=num;i++){
        if(num%i==0)
        return `${num} is not a prime number`
    }
    return `${num} given number is prime number`
 }
 console.log(prime(51));