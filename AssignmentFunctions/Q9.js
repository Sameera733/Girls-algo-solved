function findGCD(arr){
    const gcd=(a,b)=> (b===0 ? a : gcd (b,a%b))
    if (arr.length<2){
        return "Array must have atleat 2 numbers."
    }
    let result =arr[0];
    for (let i=1;i<arr.length;i++){
        result =gcd(result,arr[i]);
    }
    return result;
}
const numbers=[5,2,1];
const resultGCD=findGCD(numbers);
console.log("GCD:",resultGCD);