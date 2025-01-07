var value1 = "10";
var value2 = true;
var value3 = false;

document.write(typeof(value1) + "<br>"); // string
document.write(typeof(value2) + "<br>"); // boolean
document.write(typeof(value3) + "<br>"); // boolean

var new_value1 = Number(value1);
var new_value2 = Number(value2);
var new_value3 = Number(value3);

document.write(typeof(new_value1) + "<br>"); // number
document.write(typeof(new_value2) + "<br>"); // number
document.write(typeof(new_value3) + "<br>"); // number

document.write(new_value1 + "<br>"); // 10
document.write(new_value2 + "<br>"); // 1
document.write(new_value3 + "<br>"); // 0
