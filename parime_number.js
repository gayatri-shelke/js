// var n=require("readline-sync");
// const num=n.question("enter number: ");
// let i=2
// var count=0;
// while (i<num) {
//        if (num%i===0) {
//        count=count+1
//        }
//        i++;
// }
// if (count===0) {
//        console.log("prime number")
// }
// else {
//    console.log("not prime number")
// }



for (var i=0;i<10;) {
   console.log(i)
}

let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
for (let i=1;i<=10;i++) {
       multi=num*i;
       console.log(num + " *" + i + "=" + multi)
   }



