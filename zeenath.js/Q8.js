function findGcd(num1,num2){
    if (num2===0){
        return num1;
    }
    else {
        return findGcd(num2,num1 %num2);
    }
}
console.log(findGcd(15,72))