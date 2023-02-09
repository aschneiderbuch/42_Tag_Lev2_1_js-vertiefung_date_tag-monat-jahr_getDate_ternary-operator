console.log("test");

const body = document.querySelector("body");

let datum = new Date();

let t = datum.getDate();
console.log(t);
let m = datum.getMonth() + 1;
console.log(m);
let j = datum.getFullYear();
console.log(j); 


// t von einer in Zwei Zahlen bringen 2 -> 02
//    if else then 
// =    ?    : 
console.log(t) // 9
console.log(String(t).length) // 1
t = 
String(t).length <= 1     // if
? t=`0${t}`                 // then
: t = t;                    // else

console.log(t); // 09


// m Monat in Zwei Zahlen bringen 2 -> 02
console.log(m)
m = 
String(m).length <=1 
? m = `0${m}`
: m = m; 
console.log(m); // 09


ErgebnisDatumSzen1 = `${t}/${m}/${j}`
console.log(ErgebnisDatumSzen1) //
document.write(ErgebnisDatumSzen1 + "<br>");
body.innerHTML += ErgebnisDatumSzen1 + "<br>";

ErgebnisDatumSzen2 = `${t} - ${m} - ${j}`
body.innerHTML += ErgebnisDatumSzen2 + "<br>";