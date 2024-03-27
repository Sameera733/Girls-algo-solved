const myArray=[20,88,2,65,1,10,100,400]
function maximumNumber(){
   const maximum=Math.max(...myArray)
    return {maximum};


}
console.log(maximumNumber(myArray));