function gcd(a,b)
{
    return b===0?a:gcd(b,a%b)
}
function lcm(a,b){
    return (a*b)/gcd(a,b)
}
//find lcm of arrays
function findlcm(arr){
    let result=arr[0]
    for (let i=1;i<arr.length;i++)
{
    result=lcm(result,arr[i])
}
return result
}

const number =[4,6,8,14]
const resultlcm=findlcm(number)
console.log(`lcm of ${numbers} is: ${resultlcm}`)
