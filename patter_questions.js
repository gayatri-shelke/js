
let string = "";
i=0
while(i<5){
    j=0 
    while(j<5) { 
    if(i === 0 || i === 5 - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === 5 - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
    j++
  }

  string += "\n";
  i++
}
console.log(string);