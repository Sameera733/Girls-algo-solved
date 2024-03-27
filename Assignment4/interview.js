function minimum(arr){
    // arr.sort((a, b) => a - b);
    if (arr.length<2){
    return "array must have two numbers"
}
for (i=0;i<arr.length;i++){
    let lowest=arr[0];

    if (arr[i] < lowest) {
        lowest = arr[i];}
return lowest ;
}
}
console.log(minimum([1,2,3,4,5]))