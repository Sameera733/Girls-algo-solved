function swaptwoarrays(array1,array2){
    [array1,array2]=[array2,array1]
    return [array1,array2]
}
const arr1=['f','a','i','z','a']
const arr2=[1,2,4,6,8]
const [resswapp1,resswapp2]=swaptwoarrays(arr1,arr2)
console.log("first array after swap",resswapp1)
console.log("second array after swap",resswapp2)