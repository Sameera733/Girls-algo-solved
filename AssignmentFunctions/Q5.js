function remainder(dividend,divisor){
    if(dividend==0){
        console.log("The given number is not divible by 0")
    }
    // while(dividend>=divisor){
        // dividend=dividend-divisor;
        if(dividend<=divisor){
            console.log("The divisor is greater than dividend")
        }
        else{
            dividend=dividend-divisor;
        }
        // dividend=dividend-divisor;
    return dividend;
}
console.log(remainder(10,18));
