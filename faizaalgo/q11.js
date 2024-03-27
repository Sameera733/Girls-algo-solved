function findsumofarray(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
let arraynum=[2,3,4,8]
let resultsum=findsumofarray(arraynum)
console.log(`the sum of array is: ${resultsum}`)