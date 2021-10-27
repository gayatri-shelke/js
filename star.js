const num=require("readline-sync")
const number=num.questionInt("enter the row:")
row=0
string=""
while (row<num){
    string=number-row-1
    while(string>0){
        console.log(" ")
        string-=1
    star=row+1
    while (star>0){
        console.log("\n")
        star-=1
    row+=1

    }
    }
}