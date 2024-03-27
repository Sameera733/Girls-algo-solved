function findingSum(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let myarray=[7,5,2,9,1];
let sum=findingSum(myarray);
console.log('The sum of array elements are:',sum);