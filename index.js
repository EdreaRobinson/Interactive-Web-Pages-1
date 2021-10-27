console.log('hello world')

const counterText = document.querySelector('#counter')

const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const plusBtn = document.querySelector('#plus-btn')

let count = 0;

function increase() {
    count++
    counterText.textContent = count
    // console.log(count)
}

function decrease() {
    count--
    counterText.textContent = count
    // console.log(count)
}

function reset() {
    count = 0
    counterText.textContent = count
    // console.log(count)
}


minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)



let themeBtns = document.querySelectorAll(".theme-buttons");

// callback for the loop below
let selectTheme = (event) => {
    const theme = event.target.textContent;

    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;

    let buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }
}


for (let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener("click", selectTheme)  
    };





































// // VARIABLES

// let count = 0;
// let addButton = document.querySelector("#add");
// let subtractButton = document.querySelector("#subtract");
// let resetButton = document.querySelector("#reset");
// let headerText = document.querySelector("#header-text");


// // FUNCTIONS

// let increaseCount = () =>{
//     count = count + 1;
//     headerText.textContent = count;  
// }

// let decreaseCount = () => {
//     count -= 1;
//     headerText.textContent = count;
//  }

// let resetCount = () => {
//     count = 0;
//     headerText.textContent = count;
// }

// // LOGIC

// addButton.addEventListener("click", increaseCount);

// subtractButton.addEventListener("click", decreaseCount);

// resetButton.addEventListener("click", resetCount);

