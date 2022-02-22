var buttons = document.querySelectorAll('button');
var screen = document.querySelector('#input');
var screenVal = [];

buttons.forEach((element) => {

    element.addEventListener("click", () => {
        if (!element.className.match('remove')) {
            screenVal.push(element.value);
            screen.innerText = screenVal.join('');
            console.log(screenVal);
        }
        if (element.id.match('clear')){
            screenVal = [];
            screen.innerText = screenVal;
            console.log(screenVal);
        }
        if (element.id.match('backBtn')){
            screenVal.pop();
            screen.innerText = screenVal.join('');
            console.log(screenVal);
        }
        if (element.id.match('equal')){
            let resString = eval(screenVal.join(''));
            screen.innerText = resString;
            screenVal = [];
            // console.log(eval(screenVal.join('')));
        }

    
    })   
});
    




//
//     for(let i = 0; i < element.length; i++){
//     console.log("hey");
//     }
// });
// var arr = ['ji','li','op']
// arr.forEach(element => {
//     arr.push(9)
//     console.log(element+'ji')
// });
// console.log(arr)




// document.addEventListener("DOMContentLoaded", function onClickHandler(){
//     let element = document.getElementsByClassName("column");
//     for(let i = 0; i < element.length; i++){
//         element[i].addEventListener("click", function handler(event){
//             let clickedEvent = event.target.innerText;
//             document.getElementById("input").innerText = clickedEvent;
//             console.log("working");
//         });
//     }
// });

// function clearScreen(){
//     document.getElementById("result").value = "";
// }

// function calculateresult(){
//     let result = document.getElementById("input");
//     result.value = eval(screen);
//     console.log(eval(screen))
//     document.getElementById("input").innerText = result.value;
//     screen = "";
// }