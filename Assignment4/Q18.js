function perfectnumber(num){
    let sum=0;
    for (i=1;i<num;i++){
        if (num %i===0){
            sum+=i;
        }
    }
    return sum === num;
}
console.log(perfectnumber(28))