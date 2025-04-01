const evaulate = document.getElementById("ans");
expression = "";
let reset = false;
function result() {
    evaulate.value = expression;
    reset=true;
}
function num(n) {
    if(reset){
        deleteAll();
    }
    expression += n;
    result();
}
function operator(operand) {
    expression += operand;
    result();
    reset=false;
}
function backSpace() {
    expression = expression.slice(0, -1);
    result();
}
function deleteAll() {
    expression = "";
    result();
}
function evaluation(){
    try{
        if(expression == ''){
            expression = '0';
        }
        else{
            expression=eval(expression);
        result();
        }
    }
    catch(error){
        alert("wrong");
    }
}
const toggleButton = document.getElementById("darkModeToggle");
const container = document.getElementById("container");
const firstButton = document.getElementsByClassName("button-container-button");
const secondButton = document.getElementsByClassName("but-color");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode-body");
    container.classList.add("dark-mode-container");
    evaulate.classList.add("dark-mode-input");
    for (let button of firstButton) {
        button.classList.add("dark-mode-button");
    }
    for (let button of secondButton) {
        button.classList.add("dark-mode-but-color");
    }
}


function darkMode() {
    document.body.classList.toggle("dark-mode-body");

    if (document.body.classList.contains("dark-mode-body")) {
        container.classList.add("dark-mode-container");
        evaulate.classList.add("dark-mode-input");
        for (let button of firstButton) {
            button.classList.add("dark-mode-button");
        }
        for (let button of secondButton) {
            button.classList.add("dark-mode-but-color");
        }

        localStorage.setItem("theme", "dark");
    } else {
        container.classList.remove("dark-mode-container");
        evaulate.classList.remove("dark-mode-input");
        for (let button of firstButton) {
            button.classList.remove("dark-mode-button");
        }
        for (let button of secondButton) {
            button.classList.remove("dark-mode-but-color");
        }

        localStorage.setItem("theme", "light");
    }
}

toggleButton.addEventListener("click", darkMode);

