function findingSumOfarrayelements(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let myarray=[7,3,9,6,9,1];
let sum =findingSumOfarrayelements(myarray);
console.log(`the sum of array element is : ${sum}`);





