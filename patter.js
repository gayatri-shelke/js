// # i=1
// # while i<=5:
// #     a=1
// #     while a<=5-i:
// #         print(end="")
// #         a=a+1
// #     j=1
// #     while j<=i:
// #         print(j,end="")
// #         j=j+1
// #     print()
// #     i=i+1





// let string = "";
// for( i = 0; i < 5; i++) { 
//   for(j = 0; j < i; j++) {
//     string += "*";
//   }

//   string += "\n";
// }
// console.log(string);


// string = "";
// var i=0
// while(i<5) { 
//     j=0
//     while(j<i){ 
//         string += "*";
//     j++
//   }
//   string += "\n";
//   i++
// }
// console.log(string);


// const person = {fname:"John", lname:"Doe", age:25};

// for ( x in person) {
//   console.log(x)
// }



// const cars = ["BMW", "Volvo", "Mini"];


// for ( x of cars) {
//     console.log(cars)
//     break
// }





// for in
// var arr = [2,4,5,6,7,8]
var dic = {
  name:"madhu",
  age:45,
  student:"navgurukul"

}
for(i of dic){
  console.log(dic[i]);
}

