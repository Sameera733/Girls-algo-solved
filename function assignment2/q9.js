function findgcd(arr)
{
    const gcd=(a,b) =>(b===0? a:gcd(b,a%b))
    if(arr.lenght<2){
    return "array should have atleat two numbers"

}

let res=arr[0]
for(let i=1;i<arr.length;i++){
    res=gcd(res,arr[i])
}

return res
}
//eg
const numbers=[12,14,16]
const resultgcd=findgcd(numbers)
console.log("gcd",resultgcd)