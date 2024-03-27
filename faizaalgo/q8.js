function gcd(a,b){
    //base case
    if(b==0){
    return a}
    else if(a==0){
        return b
    }
else
{
    //recursive case
    return gcd(b,a%b)
}
}
const a=48
const b=18
const res=gcd(a,b)
console.log(`GCD of ${a},${b} is: ${res}`)
// gcd(18, 48 % 18) => gcd(18, 12)
// Again, b (12) is not 0, so we make another recursive call:
// gcd(12, 18 % 12) => gcd(12, 6)
// b (6) is still not 0, so we make another recursive call:
// gcd(6, 12 % 6) => gcd(6, 0)