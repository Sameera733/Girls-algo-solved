// Sorting the Array:

// Original array: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]
// After sorting: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9, 9]
// Calculating the Middle Index:

// Array length: 12
// Middle index: Math.floor(12 / 2) = 6
// Determining Median:

// Since the array length is even (arr.length % 2 === 0), it means there are two middle elements.
// The middle elements are at indices 5 and 6 (0-indexed), corresponding to the values arr[5] = 4 and arr[6] = 5.
// Median calculation: (4 + 5) / 2 = 4.5

function findmedian(arr){
    //sort in ascending order
    arr.sort(function(a,b){
    return a-b
    })

//calculate middle index
var middleindex=Math.floor(arr.length/2)
if(arr.length%2===0){
    //if even numbers length avg of two num
return (arr[middleindex -1]+arr[middleindex])/2
}else{
    return arr[middleindex]

}
}
var myarray=[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]
var median=findmedian(myarray)
console.log("median",median)