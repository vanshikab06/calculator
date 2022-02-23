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
    