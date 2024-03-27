function calculatesemiperimeter(side1,side2,side3)
{
    return (side1+side2+side3)/2;
}
function calculatearea(side1,side2,side3){
    let s = calculatesemiperimeter(side1,side2,side3);
    return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
}
function classifytraingle(side1,side2,side3){
    if(side1==side2 && side2===side3){
        return "equilateral traingle"
    }
    else if (side1 === side2 || side1=== side3|| side2===side3){
        return "isosceless";
    }
    else{
        return "scalene"
    }
}
console.log(classifytraingle(5,5,5))
