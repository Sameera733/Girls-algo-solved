const myarray=[2,4,6,8]
function minimumnumber(myarray){
const minimum=Math.min(...myarray)
return {minimum}
}
console.log(minimumnumber(myarray))
//greatest of three numbers

    function greatestOfThree(a, b, c) {
        return (a > b && a > c) ? a : (b > a && b >c) ? b : c;
    }
    
    const num1 = 10;
    const num2 = 20;
    const num3 = 15;
    
    console.log("The greatest number is:", greatestOfThree(num1, num2, num3));
    

function min(arr){
    arr.sort((a,b)=> a-b)
    if(arr.length<2){
    return "array must have two numbers"
}
for(i=0;i<arr.length;i++){
let lowest=arr[0]
if(arr[i]<lowest)
lowest=arr[i]
return lowest}
}
console.log(minimum([1,2,3,4,5]))