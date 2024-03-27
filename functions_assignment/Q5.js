function findRemainderWithoutModulusOperator(Dividend,Divisor){
    if(Divisor===0){
        return "cannot Divide by Zero"
    }
    else if(Dividend<=Divisor){
        return "Dividend is Less Than Divisor"
    }
    
    while(Dividend>=Divisor){
        Dividend=Dividend-Divisor
    }
    
    return Dividend; 
   
}

const num1 = 15
const num2= 4
console.log(`Remainder of ${num1} and ${num2} is:`, findRemainderWithoutModulusOperator(num1, num2))

//console.log(findRemainderWithoutModulus(15,4))