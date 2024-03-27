const myarray=[2,4,6,8]
function maximumnumber(myarray){
const maximum=Math.max(...myarray)
return {maximum}
}
console.log(maximumnumber(myarray))