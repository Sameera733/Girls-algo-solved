function median(arr){
    arr.sort((a, b) => a - b);
    let length =arr.length;
    let mid = Math.floor(length/2);
    if(length%2 !== 0)
{
    return arr[mid]
}
else {
    return (arr[mid -1] + arr[ mid])/2
}
}
console.log(median([2,3,4,5,6,7]))