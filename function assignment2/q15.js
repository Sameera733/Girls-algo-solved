const array=[4,18,20,12,56,27]
function maxminnum(array){
    const max=Math.max(...array)
    const min=Math.min(...array)
    return {max,min}
}
console.log(maxminnum(array))