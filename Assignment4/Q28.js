// function to calculate the area of a circle
function area(radius){
    let area= Math.PI*radius*radius;
return area;
}
// function to calculate the circumference of a circle
function circumference(radius){
    let circumference = 2*Math.PI*radius;
    return circumference;
}

console.log(area(2),circumference(2))