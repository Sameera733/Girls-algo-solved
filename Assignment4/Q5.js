function findingremainderwithoutmodulus(dividend ,divisor){
    if(divisor ===0){
        return "a number can't be divide by zero"
    }
    else if (dividend<divisor){
        return "the dividend is less than divisor"
    }

while (dividend>=divisor){
    dividend =dividend-divisor;
}
return dividend;
}
console.log(findingremainderwithoutmodulus(18,5))

