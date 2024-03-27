function largestnumbers(a,b,c){
     return  a >b && a>c ? "a is greatest":(b>a && b>c ? "b is greatest" : "c is greatest") 
}
result = largestnumbers(100,2000,30)
console.log(result)