function isprime(n){
    if(n < 2){
        return `${n} is not a prime number`
    }
    for ( let i=2; i<n  ; i++){
        if(n%i===0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime nummber`
}
console.log(isprime(53))