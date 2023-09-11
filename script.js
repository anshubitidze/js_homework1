
// #1
let number = 5;
if (number >20 & number <50){
    document.write("მეტია 20ზე")
}else if(number <20){
    document.write("ნაკლებია 50ზე")

}else{
    document.write("error")
}
document.write("<br>");

//  #2
let name = "მარიამ"
if( name == "მარიამ"){
    document.write("True")
}else{
    document.write("False")
}
document.write("<br>");

// #3
switch(name){
    case "მარიამ":
        document.write("True")
        break;
    default: document.write("False")
        break
}

document.write("<br>");

// #4
console.log(typeof "მარიამ");
console.log(typeof true);

// #5
let number1 = "10";
console.log(typeof "10");
