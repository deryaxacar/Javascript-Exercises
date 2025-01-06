var y = "derya";
document.writeln(typeof(y) + " : ");
document.write("Derya" + "<br>");

var x = 8;
document.write(typeof(x) + " : ");
document.write("8" + "<br>");

var z = true;
document.write(typeof(z) + " : ");
document.write("true" + "<br>");

var a = null;
document.write(typeof(a) + " : ");
document.write("null" + "<br>");

var b;
document.write(typeof(b) + " : ");
document.write("undefined" + "<br>");

var c = [1,2,3,4,5];
document.write(typeof(c) + " : ");
document.write("1,2,3,4,5" + "<br>");

function greet() {
    return "Hello!";
}
document.write(typeof(greet) + " : ");
document.write("function" + "<br>");