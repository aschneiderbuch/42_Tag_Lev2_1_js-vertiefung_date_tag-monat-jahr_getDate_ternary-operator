console.log("test");


let datum = new Date();

let t = datum.getDate();
console.log(t);
let m = datum.getMonth() + 1;
console.log(m);
let j = datum.getFullYear();
console.log(j); 

//    if else then 
// =    ?    : 
console.log(t) // 9
console.log(String(t).length) // 1
t = 
String(t).length <= 1     // if
? t=`0${t}`                 // then
: t = t;                    // else

console.log(t); // 09