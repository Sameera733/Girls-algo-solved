function mean(arr){
    if(arr.length===0){
        return null;
    }

let total=0 ;
for (let i=0;i<arr.length;i++)
{
    total +=arr[i];
}
let mean =total/arr.length;
return mean;
}
let array=[2,4,6,8,10];
let result=mean(array);
console.log("mean of array is",result);
