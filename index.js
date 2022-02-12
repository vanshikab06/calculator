
var res=10;
function calculate(){document.getElementById("input").innerText = res;}
var screen = '';
console.log('Working')
function onec(){
    screen = screen.concat("1")
    document.getElementById("input").innerText = screen;
}
function twoc(){
    screen = screen.concat("2")
    document.getElementById("input").innerText = screen;
}
function thrc(){
    screen = screen.concat("3")
    document.getElementById("input").innerText = screen;
}
function fourc(){
    screen = screen.concat("4")
    document.getElementById("input").innerText = screen;
}
function fivec(){
    screen = screen.concat("5")
    document.getElementById("input").innerText = screen;
}
function sixc(){
    screen = screen.concat("6")
    document.getElementById("input").innerText = screen;
}
function sevenc(){
    screen = screen.concat("7")
    document.getElementById("input").innerText = screen;
}
function eightc(){
    screen = screen.concat("8")
    document.getElementById("input").innerText = screen;
}
function ninec(){
    screen = screen.concat("9")
    document.getElementById("input").innerText = screen;
}
function zeroc(){
    screen = screen.concat("0")
    document.getElementById("input").innerText = screen;
}
function dotc(){
    screen = screen.concat(".")
    document.getElementById("input").innerText = screen;
}
function plusc(){
    screen = screen.concat("+")
    document.getElementById("input").innerText = screen;
}
function minc(){
    screen = screen.concat("-")
    document.getElementById("input").innerText = screen;
}
function multc(){
    screen = screen.concat("*")
    document.getElementById("input").innerText = screen;
}
function perc(){
    screen = screen.concat("%")
    document.getElementById("input").innerText = screen;
}
function dividec(){
    screen = screen.concat("/")
    document.getElementById("input").innerText = screen;
}
function clearscreen(){
    screen = ""
    document.getElementById("input").innerText = screen;
}

function calculateresult(){
    let result = document.getElementById("input");
    result.value = eval(screen);
    console.log(eval(screen))
    document.getElementById("input").innerText = result.value;
    screen = "";
}