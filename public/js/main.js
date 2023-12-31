const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const point = document.getElementById('point');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const upper = document.getElementById('upperScreen');
const under = document.getElementById('underScreen');
var keys = document.querySelectorAll('.key');

let first = []
let second = []
let result = 0

function findOperator() {
    if (upper.innerHTML.toString().includes("+")){
        return '+'; 
    } else if (upper.innerHTML.toString().includes("-")){
        return '-'
    } else if (upper.innerHTML.toString().includes("x")){
        return 'x'
    } else if (upper.innerHTML.toString().includes("/")){
        return '/'
    }
}

function pressKey(event) {
    var keyId = event.target.id;

    switch (keyId) {
        case 'one':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 1;
                } else {
                    second += 1;
                }
                under.innerHTML += 1;
            } else {
                first += 1
                upper.innerHTML = "";
                under.innerHTML = 1;
            }
            break;
        case 'two':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 2;
                } else {
                    second += 2;
                }
                under.innerHTML += 2;
            } else {
                first += 1
                upper.innerHTML = "";
                under.innerHTML = 2;
            }
            break;
       case 'three':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 3;
                } else {
                    second += 3;
                }
                under.innerHTML += 3;
            } else {
                first += 3
                upper.innerHTML = "";
                under.innerHTML = 3;
            }
            break;
        case 'four':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 4;
                } else {
                    second += 4;
                }
                under.innerHTML += 4;
            } else {
                first += 4
                upper.innerHTML = "";
                under.innerHTML = 4;
            }
            break;
        case 'five':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 5;
                } else {
                    second += 5;
                }
                under.innerHTML += 5;
            } else {
                first += 5
                upper.innerHTML = "";
                under.innerHTML = 5;
            }
            break;
        case 'six':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 6;
                } else {
                    second += 6;
                }
                under.innerHTML += 6;
            } else {
                first += 6
                upper.innerHTML = "";
                under.innerHTML = 6;
            }
            break;
        case 'seven':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 7;
                } else {
                    second += 7;
                }
                under.innerHTML += 7;
            } else {
                first += 7
                upper.innerHTML = "";
                under.innerHTML = 7;
            }
            break;
        case 'eight':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 8;
                } else {
                    second += 8;
                }
                under.innerHTML += 8;
            } else {
                first += 8
                upper.innerHTML = "";
                under.innerHTML = 8;
            }
            break;
        case 'nine':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 9;
                } else {
                    second += 9;
                }
                under.innerHTML += 9;
            } else {
                first += 9
                upper.innerHTML = "";
                under.innerHTML = 9;
            }
            break;
        case 'zero':
            if (!under.innerHTML.includes(result)) {
                if (upper.innerHTML == "") {
                    first += 0;
                } else {
                    second += 0;
                }
                under.innerHTML += 0;
            } else {
                first += 0
                upper.innerHTML = "";
                under.innerHTML = 0;
            }
            break;
        case 'add':
                if (
                    !(
                    upper.innerHTML.toString().includes("x") ||
                    upper.innerHTML.toString().includes("/") ||
                    upper.innerHTML.toString().includes("+") ||
                    upper.innerHTML.toString().includes("-") ||
                    (upper.innerHTML == "" && under.innerHTML == "")
                    )
                ) {
                    upper.innerHTML = first + "+"
                    under.innerHTML = ""
                }
            break;
        case 'substract':
                if (
                    !(
                    upper.innerHTML.toString().includes("x") ||
                    upper.innerHTML.toString().includes("/") ||
                    upper.innerHTML.toString().includes("+") ||
                    upper.innerHTML.toString().includes("-") ||
                    (upper.innerHTML == "" && under.innerHTML == "")
                    )
                ) {
                    under.innerHTML = ""
                    upper.innerHTML += first + "-"
                }
            break;
        case 'divide':
                if (
                    !(
                    upper.innerHTML.toString().includes("x") ||
                    upper.innerHTML.toString().includes("/") ||
                    upper.innerHTML.toString().includes("+") ||
                    upper.innerHTML.toString().includes("-") ||
                    (upper.innerHTML == "" && under.innerHTML == "")
                    )
                ) {
                    under.innerHTML = ""
                    upper.innerHTML += first + "/"
                }
            break;
        case 'multiply':
                if (
                    !(
                    upper.innerHTML.toString().includes("x") ||
                    upper.innerHTML.toString().includes("/") ||
                    upper.innerHTML.toString().includes("+") ||
                    upper.innerHTML.toString().includes("-") ||
                    (upper.innerHTML == "" && under.innerHTML == "")
                    )
                ) {
                    under.innerHTML = ""
                    upper.innerHTML += first + "x"
                }
            break;
        case 'point':
            // Do something for the 'point' key
            break;
        case 'equal':
            switch (findOperator()) {
                case '+':
                    result = parseInt(first) + parseInt(second)
                    under.innerHTML = result
                    upper.innerHTML = first + '+' + second
                    first = []
                    second = []
                    break
                case '-':
                    result = parseInt(first) - parseInt(second);
                    under.innerHTML = result;
                    upper.innerHTML = first + '-' + second;
                    first = [];
                    second = [];
                    break;
                case 'x':
                    result = parseInt(first) * parseInt(second);
                    under.innerHTML = result;
                    upper.innerHTML = first + 'x' + second;
                    first = [];
                    second = [];
                    break;
                case '/':
                    result = parseInt(first) / parseInt(second);
                    under.innerHTML = result;
                    upper.innerHTML = first + '/' + second;
                    first = [];
                    second = [];
                    break;
            }

            break;
        case 'clear':
            upper.innerHTML = "";
            under.innerHTML = "";
            break;
        case 'delete':
            under.innerHTML = under.innerHTML.slice(0, -1);
            if (upper.innerHTML == "") {
                first = first.slice(0, -1);
            } else {
                second = second.slice(0, -1);
            }
            break;
        default:
            // Handle default case
            break;
    }
}

keys.forEach(function(key) {
    key.addEventListener('click', pressKey);
});