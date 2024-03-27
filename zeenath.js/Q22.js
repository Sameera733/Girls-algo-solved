function isleapyear(year){
    return (year % 4 ===0 && year % 100!== 0) || (year % 400 ===0);
}
let year = 2028;
if (isleapyear(year)){
    console.log(year , "is a leapyear");
}
else{
    console .log(year,"is not a leap year")
}
