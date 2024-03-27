const myArray=[20,88,2,65,1,10,100,400]
function numberMaxMin(){
   const maximum=Math.max(...myArray)
   const minimum=Math.min(...myArray)
    return {maximum,minimum};


}
console.log((numberMaxMin(myArray)));