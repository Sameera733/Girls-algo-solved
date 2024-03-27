function findHighestLowest(arr) {
    if (arr.length === 0) {
      return { error: 'Array is empty' };
    }
  
    let highest = arr[0];
    let lowest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i];
      } else if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
  
    return { highest, lowest };
  }
  
  console.log(findHighestLowest([5,8,1,12,15,2,10]))

  //different method
  let myArray=[20,88,2,65,1,10,100,400]
function numberMaxMin(arr){
  let maximum=Math.max(...myArray)
  let minimum=Math.min(...myArray)
    return {maximum,minimum};


}
console.log((numberMaxMin(myArray)));