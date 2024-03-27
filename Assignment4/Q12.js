function swapTwoArrays(array1,array2){
    [array1,array2]=[array2,array1]
   
    return [array1,array2]

}
const array1=[1,2,3,4,5];
const array2=['S','A','L','M','A'];
const [swapedArray1,swappedArray2]=swapTwoArrays(array1,array2)
console.log("First Array After swapped",swapedArray1);
console.log("Second Array After swapped",swappedArray2);


