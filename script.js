var finalAnswer = document.getElementById("ans");
let expression = "";
let resetNext = false; 
function num(n) {
    if (resetNext) {
        expression = ""; 
        resetNext = false;
    }
    expression += n;
    resultEval();
}

function deleteAll() {
    expression = "";
    resetNext = false;
    resultEval();
}

function backSpace() {
    expression = expression.slice(0, -1);
    resultEval();
}

function resultEval() {
    finalAnswer.value = expression;
}

function percent() {
    try {
        expression = (parseFloat(expression) / 100).toString();
        resetNext = true; 
        resultEval();
    } catch {
        finalAnswer.value = "Error";
    }
}

function operator(operand) {
    if (resetNext) resetNext = false; 
    expression += operand;
    resultEval();
}

function evaluation() { 
    try {
        expression = eval(expression).toString();
        resultEval();
        resetNext = true; 
    } catch (error) {
        finalAnswer.value = "Error";
    }
}
