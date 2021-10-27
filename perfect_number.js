i=1
sum=0
var a=require("readline-sync")
var number=a.questionInt("enter the number:")
temp=number
while (i<number){
    if(number%i==0){
        sum=sum+i
    }
    i=i+1
}if (sum==temp){
    console.log(i,"its is perfect number")
}
else{
    console.log(i,"not perfect number")
}
