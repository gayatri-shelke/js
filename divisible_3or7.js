// Write a program where it will do the following things with 1 to 20 numbers:

// When number is divisible by 3 print “Nav”

// When number is divisible by 7 print “Gurukul”

// The numbers which is divisible by 3 and 7 print “NavGurukul”

// If it is not coming in any case above print number only.

// for (i=0;i<100;i++){
//     if(i%3==0&&i%7==0){
//         console.log(i,"navgurukul")
//     }
//     else if (i%3==0){
//         console.log(i,"nav")
//     }
//     else{
//         console.log(i,"gurukul")
//     }
// }


// var i=0
// while(i<100){
//     if(i%3==0&&i%7==0){
//         console.log(i,"navgurukul")
//     }
//     else if (i%3==0){
//         console.log(i,"nav")
//     }
//     else{
//         console.log(i,"gurukul")
//     }
//     i++
// }

var i=1
do{
    if(i%3==0&&i%7==0){
        console.log(i,"navgurukul")
    }
    else if (i%3==0){
        console.log(i,"nav")
    }
    else{
        console.log(i,"gurukul")
    }
    i++
}
while(i<100)