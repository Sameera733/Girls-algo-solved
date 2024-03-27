function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else {
        return n*factorial(n-1)
    }
}
    function permutation(n,r){
        if(n < r){
            return -1;
         }
        return factorial(n)/factorial(n-r);
    }
    function combination(n,r){
        if(n <r){
            return -1;
        }
        return (factorial(n)/(factorial(r)*factorial(n-r)))
    }

console.log(permutation(14,15))
console.log(combination(12,11))