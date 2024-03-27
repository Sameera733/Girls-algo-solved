function findSumOfArrayElements(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

let myArray=[10,5,3,8,9];
let sum=findSumOfArrayElements(myArray);
console.log(`The sum of Array Elements is : ${sum}`);